# 🚀 CONFIGURACIÓN DE FORMSPREE - GUÍA PASO A PASO

## ✅ PASO 1: REGISTRARTE EN FORMSPREE

1. **Ve a:** https://formspree.io/
2. **Haz clic en:** "Get Started" o "Sign Up"
3. **Regístrate con tu email** (puedes usar `E_broofing@yahoo.com` o cualquier otro)
4. **Verifica tu email** (revisa tu bandeja de entrada)

---

## ✅ PASO 2: CREAR TU FORMULARIO EN FORMSPREE

1. Una vez dentro del dashboard, haz clic en **"+ New Form"** o **"Create Form"**
2. **Nombre del formulario:** `E&B Roofing Contact Form`
3. **Email de destino:** `E_broofing@yahoo.com`
4. Haz clic en **"Create"**

---

## ✅ PASO 3: OBTENER TU FORM ID

Después de crear el formulario, Formspree te mostrará:

```
Form Endpoint: https://formspree.io/f/xyzabc123
                                        ^^^^^^^^
                                    Este es tu FORM ID
```

**Copia solo la parte después de `/f/`** (ejemplo: `xyzabc123`)

---

## ✅ PASO 4: CONFIGURAR TU CÓDIGO

1. **Abre el archivo:** `roofer pack/roofer/app/contact/page.js`

2. **Busca la línea 30** que dice:
   ```javascript
   const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'; // ⚠️ CAMBIAR ESTO
   ```

3. **Reemplaza `YOUR_FORM_ID`** con tu Form ID real:
   ```javascript
   const FORMSPREE_FORM_ID = 'xyzabc123'; // ✅ Ejemplo con tu ID real
   ```

---

## ✅ PASO 5: COMPILAR Y SUBIR

Una vez que hayas cambiado el FORM ID, ejecuta estos comandos:

```powershell
# 1. Ve a la carpeta del proyecto
cd "roofer pack/roofer"

# 2. Compila el proyecto
npm run build

# 3. Vuelve a la raíz
cd ../..

# 4. Copia los archivos compilados
Copy-Item -Path "roofer pack\roofer\out\*" -Destination "." -Recurse -Force

# 5. Sube a GitHub
git add .
git commit -m "Configurar Formspree para formulario de contacto"
git push origin deploy
```

---

## ✅ PASO 6: CONFIGURACIÓN ADICIONAL EN FORMSPREE (OPCIONAL)

En el dashboard de Formspree, puedes configurar:

### 📧 **Notificaciones por Email**
- ✅ Ya está configurado para enviar a `E_broofing@yahoo.com`

### 🛡️ **Protección Anti-Spam**
- Ve a: **Settings → Spam Protection**
- Activa: **reCAPTCHA** (recomendado)

### 📨 **Personalizar Email de Confirmación**
- Ve a: **Settings → Autoresponder**
- Activa: **Send confirmation email to submitter**
- Personaliza el mensaje que recibirán tus clientes

### 🔔 **Integraciones**
- Puedes conectar con Slack, Google Sheets, etc.

---

## 🎯 EJEMPLO COMPLETO

Si tu Form ID es `xyzabc123`, tu código debe quedar así:

```javascript
const FORMSPREE_FORM_ID = 'xyzabc123';

const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData),
});
```

---

## ✅ VERIFICAR QUE FUNCIONA

1. **Después de subir a Hostinger**, ve a tu sitio web
2. **Llena el formulario de contacto** con datos de prueba
3. **Haz clic en "Send Your Message"**
4. **Deberías ver:** "✅ Thank you! Your message has been sent successfully..."
5. **Revisa tu email** `E_broofing@yahoo.com` - deberías recibir el mensaje

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### ❌ Error: "Form not found"
- **Causa:** El FORM_ID está mal escrito
- **Solución:** Verifica que copiaste correctamente el ID de Formspree

### ❌ Error: "Failed to send message"
- **Causa:** Problema de conexión o CORS
- **Solución:** Verifica que el sitio esté publicado en Hostinger (no funcionará en localhost con sitio estático)

### ❌ No recibo emails
- **Causa:** El email de destino no está verificado en Formspree
- **Solución:** Ve a Formspree → Settings → Verify email address

---

## 📊 PLAN GRATUITO DE FORMSPREE

- ✅ **50 envíos por mes** (gratis)
- ✅ Protección anti-spam
- ✅ Notificaciones por email
- ✅ Almacenamiento de envíos por 30 días

Si necesitas más, puedes actualizar a un plan pago ($10/mes para 1000 envíos).

---

## 🎉 ¡LISTO!

Una vez que completes estos pasos, tu formulario estará funcionando perfectamente en tu sitio estático de Hostinger.

**¿Necesitas ayuda?** Avísame en qué paso estás y te ayudo.
