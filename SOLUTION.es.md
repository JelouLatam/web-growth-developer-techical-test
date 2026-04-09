# Solución

> Completa cada sección a continuación. Este documento es una parte importante de la evaluación — trátalo como un documento de diseño técnico, no como un trabajo de clase.

## Hallazgos de la Auditoría

Documenta cada problema que encontraste en el código del starter.

| # | Severidad | Área | Descripción | Fix Aplicado |
|---|---|---|---|---|
| 1 | _crítico / mayor / menor_ | _tracking / código / rendimiento / a11y_ | _Qué está mal_ | _Qué hiciste_ |
| 2 | | | | |
| _..._ | | | | |

## Stack Tecnológico y Decisiones de Arquitectura

| Tecnología | Propósito | Por Qué |
|---|---|---|
| _ej., Vanilla JS (ES modules)_ | _Lógica del lado del cliente_ | _Sin overhead de framework para una landing page_ |

_Describe los cambios arquitectónicos que hiciste al código del starter y por qué._

## Esquema de Eventos (Listo para Data Warehouse)

Diseña el esquema como si estos eventos fueran a aterrizar en BigQuery / Snowflake.

### `page_view`

| Columna | Tipo | Descripción |
|---|---|---|
| `event_name` | STRING | Siempre `page_view` |
| `timestamp` | TIMESTAMP | ISO 8601 |
| _...agregar columnas_ | | |

**Fila de ejemplo:**
```json
{}
```

### `form_submit`

| Columna | Tipo | Descripción |
|---|---|---|
| _..._ | | |

**Fila de ejemplo:**
```json
{}
```

### `cta_click`

| Columna | Tipo | Descripción |
|---|---|---|
| _..._ | | |

### `scroll_depth`

| Columna | Tipo | Descripción |
|---|---|---|
| _..._ | | |

### `section_view`

| Columna | Tipo | Descripción |
|---|---|---|
| _..._ | | |

## Arquitectura del Test Multivariante

_Describe:_
- Cómo se asignan y distribuyen las 4 combinaciones
- Cómo previenes el flicker
- Cómo fluye el ID de combinación a través del tracking
- Cómo determinarías un ganador (métrica principal, tamaño de muestra, enfoque estadístico)
- Qué tan fácil sería agregar una tercera variable de test

## Modelo de Atribución

_Describe:_
- Cómo funciona la atribución first-touch (almacenamiento, persistencia, cuándo se establece)
- Cómo funciona la atribución last-touch (almacenamiento, cuándo se actualiza)
- Edge case: el usuario llega vía LinkedIn, se va, vuelve de forma orgánica — ¿qué hay en cada bucket de atribución?
- Cómo se incluyen ambos en el payload del formulario

## Enfoque de Personalización

_Describe:_
- Cómo están estructuradas las reglas de personalización (muestra el config si aplica)
- Qué cambia por segmento (LinkedIn, Google, HubSpot, orgánico)
- Cómo coexisten personalización y MVT (¿cuál tiene prioridad? ¿se componen?)
- Cómo una persona no técnica modificaría las reglas

## Optimizaciones de Rendimiento

_¿Qué corregiste del starter? ¿Qué optimizarías con más tiempo?_

## Checklist de QA

- [ ] Testeado en Chrome, Firefox, Safari
- [ ] Testeado en viewport mobile (375px) y tablet (768px)
- [ ] Validación del formulario funciona para todos los campos
- [ ] Validación de email corporativo rechaza emails personales (gmail, yahoo, outlook, hotmail, icloud, aol)
- [ ] Parámetros UTM: first-touch capturado y persistido en localStorage
- [ ] Parámetros UTM: last-touch capturado y persistido en sessionStorage
- [ ] Ambos modelos de atribución incluidos en el payload del envío del formulario
- [ ] MVT: las 4 combinaciones renderizan correctamente
- [ ] MVT: la combinación persiste entre recargas de página
- [ ] MVT: override `?headline=B&cta=A` funciona
- [ ] MVT: sin flicker visible en la asignación de variante
- [ ] MVT: ID de combinación incluido en todos los eventos de tracking
- [ ] Personalización: `?utm_source=linkedin` muestra experiencia de LinkedIn
- [ ] Personalización: `?utm_source=google` muestra experiencia de Google
- [ ] Personalización: `?utm_source=hubspot` muestra página acortada
- [ ] Personalización: tráfico orgánico/directo muestra experiencia por defecto
- [ ] Todos los eventos de tracking se disparan con esquema consistente (verificar consola)
- [ ] El tracking respeta el estado de consentimiento
- [ ] Eventos de scroll depth se disparan en 25%, 50%, 75%, 100%
- [ ] Eventos de visibilidad de sección se disparan vía Intersection Observer
- [ ] Sin errores en consola
- [ ] Lighthouse Performance score (mobile): ___

## Trade-offs y Decisiones

_Documenta cualquier ambigüedad que encontraste y cómo la resolviste. ¿Qué harías diferente en producción con más tiempo y recursos?_
