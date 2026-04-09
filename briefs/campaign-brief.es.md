# Brief de Campaña: Lanzamiento de Flowbase HR

## Resumen de la Campaña

**Producto:** Flowbase for HR — plataforma automatizada de onboarding y ciclo de vida del empleado
**Objetivo:** Generar solicitudes de demo de líderes de HR en empresas mid-market (200–2.000 empleados)
**Nombre de campaña:** `hr-launch-q2-2026`
**Lanzamiento objetivo:** Q2 2026

---

## Audiencia Objetivo

- **Primaria:** HR Directors / VP of People en empresas mid-market
- **Secundaria:** HR Operations Managers, People Ops leads
- **Pain points:**
  - Procesos de onboarding manuales que no escalan
  - Poca visibilidad sobre hitos del ciclo de vida del empleado
  - Herramientas desconectadas (HRIS, nómina, provisioning de IT)
  - Riesgos de compliance por procesos inconsistentes

---

## Jerarquía de Mensajes

### Mensaje Principal
> Onboard every employee in half the time — with zero dropped steps.

### Mensajes de Soporte
1. **Automatización:** Automatiza workflows de onboarding a través de HR, IT y nómina en un solo lugar
2. **Visibilidad:** Dashboards en tiempo real que muestran la etapa del journey de cada empleado
3. **Compliance:** Verificaciones de compliance integradas que se adaptan a tu región y tipo de rol
4. **Integración:** Se conecta con tu HRIS, Slack, Google Workspace y más de 50 herramientas

### Social Proof
- "We reduced onboarding time from 3 weeks to 4 days" — VP People, TechScale (400 empleados)
- "Finally, one place to see where every new hire is in their journey" — HR Director, GrowthOps
- "The compliance automation alone saved us 20 hours per month" — People Ops Manager, ScaleUp Inc
- Trusted by 200+ mid-market companies

---

## Estructura de la Página (Sugerida)

Esto es una guía, no un wireframe. Usa tu criterio.

1. **Hero** — Titular, subtitular, CTA principal (Request a Demo), imagen/ilustración opcional
2. **Pain / Problema** — Habla de la frustración actual de la audiencia
3. **Visión General de la Solución** — Cómo Flowbase lo resuelve (visual o grid de features)
4. **Social Proof** — Testimonios y/o logos
5. **Cómo Funciona** — Proceso de 3 pasos o flujo visual
6. **Sección CTA** — Repetir el formulario de solicitud de demo o CTA
7. **Footer** — Legal, links de la empresa

---

## Objetivo de Conversión

**CTA Principal:** Formulario de "Request a Demo"
**Campos del formulario:**
- Nombre completo (obligatorio)
- Email corporativo (obligatorio, debe ser email de empresa — rechazar `gmail.com`, `hotmail.com`, etc.)
- Tamaño de empresa (obligatorio, dropdown: 1–50, 51–200, 201–500, 501–2000, 2000+)

**En caso de éxito:** Mostrar un mensaje de confirmación (no se necesita redirección). Disparar evento de conversión.

---

## Fuentes de Tráfico y Atribución

Esta página recibirá tráfico de múltiples canales pagados y orgánicos. Hemos observado que **los usuarios a menudo nos descubren en un canal y convierten en otro** — por ejemplo, ven un anuncio en LinkedIn, se van y luego vuelven a través de una búsqueda en Google días después. Entender ambos puntos de contacto es crítico para la asignación de presupuesto.

### Canales

| Canal | Parámetros UTM | Intención del Visitante |
|---|---|---|
| Google Ads (search + display) | `utm_source=google&utm_medium=cpc` | Alta intención — buscan activamente soluciones de onboarding. Responden bien a copy específico de features y planteamiento directo de problema/solución. |
| LinkedIn Ads | `utm_source=linkedin&utm_medium=paid_social` | Mid-funnel — conscientes del problema pero no están comprando activamente. Responden bien a prueba de pares (testimonios de roles similares) y mensajes orientados a resultados de negocio. |
| Email nurture (HubSpot) | `utm_source=hubspot&utm_medium=email` | Ya están en nuestro funnel — saben quiénes somos. No necesitan el pitch completo. Página más corta, tono más cálido, ir directo a la solicitud de demo. |
| Orgánico / Directo | Sin UTMs | Intención mixta — pueden ser referidos, visitantes recurrentes o búsquedas de marca. Mostrar la experiencia completa por defecto. |

Todos los parámetros UTM deben ser capturados, persistidos y enviados con el formulario. Necesitamos datos de atribución **tanto de first-touch como de last-touch** en cada envío de formulario para que el equipo de analytics pueda modelar la atribución correctamente.

### Notas de Personalización del Demand Gen

> "Hemos estado enviando la misma página a todos y nuestro CPL de LinkedIn es 3× más alto que el de Google. Creo que es porque la página no habla a los visitantes de LinkedIn como debería. Necesitan social proof de pares — no una lista de features. Mientras tanto, los visitantes de Google están más avanzados en el funnel; quieren detalles específicos. Y nuestros contactos de email nurture ya conocen el producto — mostrarles el pitch completo desde cero se siente fuera de lugar. ¿Podemos personalizar la experiencia?"
>
> — Jamie, Demand Gen Manager

**Lo que esto significa para la página:**
- **Visitantes de LinkedIn** deberían ver testimonios de forma prominente y titulares orientados a resultados
- **Visitantes de Google** deberían ver contenido enfocado en features y copy de intención de búsqueda (ej., "Looking for onboarding automation?")
- **Visitantes de email nurture** deberían ver una página simplificada — saltarse la educación, ir directo a la solicitud
- **Visitantes orgánicos/directos** reciben la experiencia completa por defecto

Cómo implementes esto depende de ti, pero las reglas deben ser fáciles de entender y modificar sin cambios profundos en el código.

---

## Guías de Marca (Simplificadas)

- **Color primario:** `#2563EB` (azul)
- **Color secundario:** `#0F172A` (navy oscuro)
- **Color de acento:** `#10B981` (verde, para CTAs y estados de éxito)
- **Fondo:** `#FFFFFF` (blanco) con `#F8FAFC` (gris claro) alternando secciones
- **Tipografía:** Cualquier sans-serif limpia (Inter, DM Sans, o fuentes del sistema)
- **Tono:** Profesional pero cercano. Sin jerga corporativa. Claro y directo.

---

## Requisitos Técnicos (de Demand Gen)

- La página debe cargar rápido — muchos usuarios vienen desde LinkedIn mobile
- Debe manejar parámetros UTM de todas las fuentes anteriores (captura, persistencia, atribución)
- El formulario debe validar email corporativo (sin emails personales)
- Todos los CTAs y envíos del formulario deben disparar eventos de tracking
- Necesitamos testear **múltiples elementos simultáneamente** — el titular del hero y el copy del botón CTA como mínimo. Preparar un test multivariante, no solo A/B.
- Los eventos deben estar estructurados para poder aterrizar en nuestro data warehouse sin transformación
- La página será revisada por el equipo de Lifecycle para compatibilidad con HubSpot
- Necesitamos entender qué combinaciones de fuentes de tráfico generan más conversiones — la atribución importa

---

## Assets

Puedes usar imágenes placeholder. Recursos sugeridos:
- Ilustraciones: usa cualquier librería de ilustraciones gratuita o SVGs simples
- Logos (social proof): usa cajas grises placeholder
- Iconos: usa cualquier librería de iconos (Lucide, Heroicons, etc.)
