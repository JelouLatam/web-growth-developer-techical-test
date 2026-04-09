# Web Growth Developer — Prueba Técnica

## Descripción General

Esta prueba técnica evalúa tu capacidad para **auditar, mejorar y extender experiencias web orientadas a conversión** — no solo construir desde cero. Heredarás un código existente, identificarás sus fallos y lo elevarás a calidad de producción mientras agregas nuevas funcionalidades.

Esta prueba está diseñada para growth engineers con experiencia que entienden el ciclo de vida completo de una página de conversión: desde la atribución hasta la experimentación y la medición.

**Tiempo estimado:** 6–8 horas
**Plazo de entrega:** 2 días naturales desde la recepción de esta prueba

---

## Contexto

Eres el **Web Growth Developer** que se incorpora a **Flowbase** (empresa B2B SaaS ficticia). Un desarrollador anterior construyó una landing page para el lanzamiento del producto de HR, pero ya no está en la empresa. La Demand Gen Manager necesita que:

1. **Audites** la página existente y corrijas los problemas críticos
2. **Extiendas** la página con testing multivariante, tracking de atribución y personalización por fuente de tráfico
3. **Documentes** tus decisiones y arquitectura

El código existente está en el directorio [`starter/`](starter/). El brief de la campaña está en [`briefs/campaign-brief.md`](briefs/campaign-brief.md).

> **Importante:** El código del starter funciona, pero tiene bugs, problemas de arquitectura y funcionalidades que faltan. Parte de esta prueba es identificar qué está mal. No empieces desde cero — trabaja con lo que hay.

---

## Qué Debes Entregar

### 1. Auditoría de Código y Remediación

Revisa el código del starter e identifica problemas en:

- **Bugs** — cualquier cosa rota o que produce comportamiento incorrecto
- **Integridad del tracking** — eventos que se disparan incorrectamente, tienen esquemas inconsistentes o les faltan datos
- **Calidad de código** — arquitectura, semántica, accesibilidad, mantenibilidad
- **Rendimiento** — recursos que bloquean el renderizado, cambios de layout, overhead innecesario

**Requisitos:**
- [ ] Documentar todos los problemas encontrados en tu `SOLUTION.md` (con severidad: crítico / mayor / menor)
- [ ] Corregir todos los problemas críticos y mayores
- [ ] Refactorizar el JavaScript en una arquitectura modular (separación de responsabilidades)
- [ ] Asegurar que todo el HTML sea semántico y accesible
- [ ] Resolver cualquier condición de carrera o problema de timing en la implementación del tracking

### 2. Testing Multivariante (MVT)

La página actual tiene un test A/B simple en el titular del hero. Extiéndelo a un **test multivariante** que pruebe combinaciones de:

- **Titular del hero** (2 variantes)
- **Copy del CTA principal** (2 variantes: "Request a Demo" vs. "See It in Action")

Esto produce 4 combinaciones (2×2).

**Requisitos:**
- [ ] Implementar un mecanismo MVT del lado del cliente con distribución equitativa del tráfico entre las 4 combinaciones
- [ ] Cada combinación debe ser persistente para el usuario (misma visita = misma experiencia)
- [ ] El ID completo de la combinación (ej., `headline_B-cta_A`) debe fluir a través de todos los eventos de tracking
- [ ] Soportar overrides por query param para QA: `?headline=B&cta=A`
- [ ] Resolver el **problema de flicker** — los usuarios no deben ver el contenido intercambiarse después de la carga de la página
- [ ] Documentar: cómo determinarías un ganador, supuestos de tamaño de muestra necesario y qué métrica optimizarías

### 3. Arquitectura de Atribución

La implementación actual solo captura UTMs a nivel de sesión. La atribución real es más compleja.

**Requisitos:**
- [ ] Implementar **atribución de primer toque (first-touch)**: almacenar el primer conjunto de UTMs que el usuario trajo (persistido en `localStorage`)
- [ ] Implementar **atribución de último toque (last-touch)**: almacenar los UTMs más recientes (persistido en `sessionStorage`)
- [ ] Ambos datos de first-touch y last-touch deben incluirse en el payload del envío del formulario
- [ ] Diseñar el **esquema de eventos** para todos los eventos de tracking como si fueran a aterrizar en un data warehouse (BigQuery / Snowflake). Documentar el esquema en `SOLUTION.md` con:
  - Nombre de tabla / evento
  - Nombres de columnas y tipos
  - Fila de ejemplo
- [ ] Manejar edge cases: ¿qué pasa cuando un usuario visita con UTMs, se va y vuelve de forma orgánica?

### 4. Personalización por Fuente de Tráfico

Diferentes fuentes de tráfico traen usuarios con diferente intención. La página debe adaptarse.

**Requisitos:**
- [ ] Cuando `utm_source=linkedin`: mostrar social proof específico de LinkedIn y una variante del titular que enfatice el resultado de negocio
- [ ] Cuando `utm_source=google`: mostrar copy orientado a intención de búsqueda que aborde el problema específico, con puntos de prueba enfocados en funcionalidades
- [ ] Cuando `utm_source=hubspot` (email nurture): mostrar copy más cálido de visitante recurrente, con una página más corta (ocultar secciones de problema/solución, ir directo al formulario)
- [ ] Para tráfico orgánico/directo: mostrar la página por defecto
- [ ] La personalización **no debe entrar en conflicto** con el MVT — documentar cómo coexisten
- [ ] Las reglas de personalización deben ser **configurables** (sin cadenas if/else hardcodeadas) — una persona no técnica debería poder entender el mapeo

### 5. Tracking y Medición

Corregir el tracking existente y extenderlo.

**Requisitos:**
- [ ] Todos los eventos deben usar un **esquema consistente** (mismos nombres de claves, misma estructura)
- [ ] Cada evento debe incluir: `timestamp`, `session_id`, `variant_combination`, `first_touch_utm`, `last_touch_utm`, `personalization_segment`
- [ ] Simular un evento `page_view` en la carga (respetando el estado de consentimiento)
- [ ] Simular un evento `form_submit` con datos completos de atribución
- [ ] Disparar eventos `cta_click` con etiquetas identificativas
- [ ] Agregar atributos `data-track` a todos los elementos interactivos
- [ ] Implementar **tracking de profundidad de scroll** (25%, 50%, 75%, 100%)
- [ ] Usar `Intersection Observer` para tracking de visibilidad de secciones

### 6. Documentación (SOLUTION.md)

En `SOLUTION.md`, incluir:

- **Hallazgos de la auditoría** — tabla de todos los problemas encontrados en el código starter (severidad, descripción, fix aplicado)
- **Decisiones técnicas** — qué cambiaste arquitectónicamente y por qué
- **Esquema de eventos** — esquema listo para data warehouse con definiciones de tablas y filas de ejemplo
- **Arquitectura MVT** — cómo funciona el test multivariante, cómo medirías resultados, razonamiento sobre tamaño de muestra
- **Enfoque de personalización** — cómo coexisten personalización y MVT, cómo se configuran las reglas
- **Modelo de atribución** — cómo funcionan first-touch y last-touch, manejo de edge cases
- **Notas de rendimiento** — qué optimizaste
- **Checklist de QA** — pasos de verificación realizados
- **Trade-offs** — qué simplificaste, qué harías diferente en producción

---

## Criterios de Evaluación

| Criterio | Peso | Qué Buscamos |
|---|---|---|
| **Auditoría y remediación de código** | 20% | ¿Encontraste los problemas reales? ¿Son correctas las correcciones? ¿La arquitectura refactorizada está limpia? |
| **Arquitectura de experimentación** | 20% | ¿El mecanismo MVT es sólido? ¿Se resolvió el anti-flicker? ¿Se podrían agregar más experimentos fácilmente? |
| **Atribución y tracking** | 20% | ¿First-touch / last-touch correctos? ¿Esquema de eventos listo para warehouse? ¿Consistente y completo? |
| **Personalización** | 15% | ¿Funciona por fuente de tráfico? ¿El sistema de reglas es configurable? ¿Coexiste con el MVT? |
| **Calidad de código y rendimiento** | 15% | HTML semántico, JS modular, CSS limpio, carga rápida, sin CLS, adaptado a móvil |
| **Documentación y razonamiento** | 10% | Pensamiento claro, trade-offs honestos, auditoría completa, SOLUTION.md bien estructurado |

### Lo Que NO Evaluamos

- **Diseño visual** — tenemos diseñadores. La estructura y la lógica de UX importan, no la perfección de píxeles. **Tienes libertad para cambiar el diseño del sitio web si consideras que mejora la experiencia del usuario o los objetivos de conversión.** Si lo haces, debes explicar tu razonamiento en el video walkthrough.
- **Desarrollo backend** — este es un rol de front-end / growth.
- **Uso de un framework específico** — usa lo que te haga productivo.

---

## Cómo Empezar

```bash
cd starter/
npm install    # opcional — solo necesario para el dev server
npm run dev    # sirve en http://localhost:3000
```

La página del starter es HTML estático — no requiere paso de compilación. También puedes abrir `index.html` directamente en el navegador.

---

## Entrega

1. Sube tu solución a un **repositorio de GitHub público o privado**
2. Incluye un `SOLUTION.md` completado en la raíz
3. El proyecto debe funcionar localmente con un comando simple (documéntalo)
4. Graba un **video corto de walkthrough** (5–10 minutos) explicando tu solución:
   - Recorre los hallazgos de la auditoría y cómo priorizaste las correcciones
   - Demuestra el MVT, la personalización y la atribución en acción (muestra el navegador + consola)
   - Explica tus decisiones arquitectónicas clave y trade-offs
   - **Si cambiaste el diseño del sitio web**, explica por qué — qué problema resuelve y cómo mejora la experiencia o los objetivos de conversión
   - Puedes usar Loom, QuickTime o cualquier herramienta de grabación de pantalla — no es necesario editar
5. Responde al email con el link de tu repositorio y el link del video

---

## Bonus (Opcional)

Estos no son obligatorios pero diferenciarán positivamente tu entrega:

- [ ] Despliega en Vercel / Netlify / Cloudflare Pages y comparte la URL en vivo
- [ ] Simula un payload de envío de formulario de HubSpot
- [ ] Genera un `session_id` y persístelo para atribución cross-page
- [ ] Implementa detección de "visitante recurrente" que ajuste el copy de la página
- [ ] Agrega un banner de consentimiento de cookies que controle correctamente todo el tracking

---

## Preguntas

Si algo no está claro, **toma una decisión y documéntala** en tu `SOLUTION.md`. Esto es parte de la evaluación — queremos ver cómo manejas la ambigüedad y los trade-offs, igual que en el rol real.

Buena suerte.
