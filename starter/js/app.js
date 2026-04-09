// Flowbase HR Landing Page — Main Script
// Built by previous developer. See README for context.

// Global state
var currentVariant = null;
var utmParams = {};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    initUTMCapture();
    initABTest();
    initTracking();
    initForm();
    initCookieBanner();
});


// ============================================
// UTM Parameter Handling
// ============================================

function initUTMCapture() {
    var params = new URLSearchParams(window.location.search);
    var utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    utmKeys.forEach(function (key) {
        var value = params.get(key);
        if (value) {
            utmParams[key] = value;
            sessionStorage.setItem(key, value);
        }
    });

    // Restore from session storage if no UTMs in current URL
    if (Object.keys(utmParams).length === 0) {
        utmKeys.forEach(function (key) {
            var stored = sessionStorage.getItem(key);
            if (stored) {
                utmParams[key] = stored;
            }
        });
    }
}


// ============================================
// A/B Testing
// ============================================

function initABTest() {
    var params = new URLSearchParams(window.location.search);
    var forcedVariant = params.get('variant');

    if (forcedVariant === 'A' || forcedVariant === 'B') {
        currentVariant = forcedVariant;
    } else {
        var stored = localStorage.getItem('ab_variant');
        if (stored) {
            currentVariant = stored;
        } else {
            currentVariant = Math.random() < 0.5 ? 'A' : 'B';
        }
    }

    localStorage.setItem('ab_variant', currentVariant);

    // Apply variant to the headline
    var headline = document.getElementById('hero-headline');
    if (currentVariant === 'B') {
        headline.textContent = 'Onboard every new hire in half the time — with zero dropped steps';
    }
}


// ============================================
// Tracking
// ============================================

function initTracking() {
    window.dataLayer = window.dataLayer || [];

    // Fire page view event
    window.dataLayer.push({
        'event': 'page_view',
        'page_title': document.title,
        'page_url': window.location.href,
        'variant': currentVariant,
        'utm_source': utmParams.utm_source || '',
        'utm_medium': utmParams.utm_medium || '',
        'utm_campaign': utmParams.utm_campaign || ''
    });

    console.log('[Tracking] page_view fired', window.dataLayer[window.dataLayer.length - 1]);

    // Attach CTA click tracking to data-track elements
    var ctas = document.querySelectorAll('[data-track="cta_click"]');
    ctas.forEach(function (cta) {
        cta.addEventListener('click', function () {
            var payload = {
                'event_name': 'cta_click',
                'label': this.getAttribute('data-label'),
                'page_url': window.location.href
            };
            window.dataLayer.push(payload);
            console.log('[Tracking] cta_click fired', payload);
        });
    });
}

// Standalone tracker for inline onclick handlers
function trackCTA(label) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'cta_click',
        'cta_label': label
    });
    console.log('[Tracking] cta_click (inline)', label);
}


// ============================================
// Form Handling
// ============================================

function initForm() {
    var form = document.getElementById('demo-request-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('work-email').value.trim();
        var companySize = document.getElementById('company-size').value;

        // Clear previous errors
        clearErrors();

        // Quick check: if everything is empty, alert the user
        if (!name && !email && !companySize) {
            alert('Please fill out all fields to request a demo.');
            return;
        }

        var isValid = true;

        if (!name) {
            showError('name-error', 'Full name is required');
            isValid = false;
        }

        if (!email) {
            showError('email-error', 'Work email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email-error', 'Please enter a valid email address');
            isValid = false;
        } else if (isPersonalEmail(email)) {
            showError('email-error', 'Please use your company email address');
            isValid = false;
        }

        if (!companySize) {
            showError('company-size-error', 'Please select your company size');
            isValid = false;
        }

        if (!isValid) return;

        // Fire form submission tracking event
        window.dataLayer.push({
            'event_name': 'form_submit',
            'form_id': 'demo-request',
            'name': name,
            'email': email,
            'company_size': companySize,
            'variant': currentVariant,
            'utm_source': utmParams.utm_source,
            'utm_medium': utmParams.utm_medium,
            'utm_campaign': utmParams.utm_campaign
        });

        console.log('[Tracking] form_submit fired');

        // Show success state
        form.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
    });

    // Real-time blur validation
    document.getElementById('name').addEventListener('blur', function () {
        if (!this.value.trim()) {
            showError('name-error', 'Full name is required');
        } else {
            hideError('name-error');
        }
    });

    document.getElementById('work-email').addEventListener('blur', function () {
        var val = this.value.trim();
        if (!val) {
            showError('email-error', 'Work email is required');
        } else if (!isValidEmail(val)) {
            showError('email-error', 'Please enter a valid email address');
        } else if (isPersonalEmail(val)) {
            showError('email-error', 'Please use your company email address');
        } else {
            hideError('email-error');
        }
    });
}

function isValidEmail(email) {
    return email.indexOf('@') > -1 && email.indexOf('.') > -1;
}

function isPersonalEmail(email) {
    var domain = email.split('@')[1];
    var blocked = ['gmail.com', 'hotmail.com'];
    return blocked.indexOf(domain) > -1;
}

function showError(id, message) {
    var el = document.getElementById(id);
    el.textContent = message;
    el.style.display = 'block';
}

function hideError(id) {
    var el = document.getElementById(id);
    el.textContent = '';
    el.style.display = 'none';
}

function clearErrors() {
    var errors = document.querySelectorAll('.error-message');
    errors.forEach(function (el) {
        el.textContent = '';
        el.style.display = 'none';
    });
}


// ============================================
// Cookie Consent Banner
// ============================================

function initCookieBanner() {
    var consent = localStorage.getItem('cookie_consent');

    if (consent) {
        document.getElementById('cookie-banner').style.display = 'none';
        return;
    }

    document.getElementById('accept-cookies').addEventListener('click', function () {
        localStorage.setItem('cookie_consent', 'accepted');
        document.getElementById('cookie-banner').style.display = 'none';
    });

    document.getElementById('decline-cookies').addEventListener('click', function () {
        localStorage.setItem('cookie_consent', 'declined');
        document.getElementById('cookie-banner').style.display = 'none';
    });
}
