# Soluciones para Formulario en Sitio Estático (Hostinger)

## 🚨 PROBLEMA ACTUAL
Tu sitio usa `output: 'export'` en Next.js, lo que genera archivos HTML estáticos.
Los sitios estáticos NO pueden ejecutar código del servidor (API routes).
Por eso tu formulario no funciona en Hostinger.

---

## ✅ OPCIÓN 1: Formspree (RECOMENDADO - Más Fácil)

### Ventajas:
- ✅ Gratis hasta 50 envíos/mes
- ✅ No requiere backend
- ✅ Configuración en 5 minutos
- ✅ Protección anti-spam incluida
- ✅ Notificaciones por email

### Pasos:

1. **Regístrate en Formspree**
   - Ve a: https://formspree.io/
   - Crea una cuenta gratis
   - Crea un nuevo formulario
   - Te darán un endpoint como: `https://formspree.io/f/YOUR_FORM_ID`

2. **Modifica tu formulario**
   - Cambia el `action` del form a tu endpoint de Formspree
   - Ejemplo en `app/contact/page.js`:

```javascript
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  id="contact-form"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="tel" name="phone" placeholder="Phone Number" required />
  <textarea name="message" placeholder="Type message"></textarea>
  <button type="submit">Send Your Message</button>
</form>
```

3. **Configura el email de destino**
   - En Formspree, configura que los emails vayan a: `E_broofing@yahoo.com`

---

## ✅ OPCIÓN 2: Web3Forms (100% Gratis)

### Ventajas:
- ✅ Completamente gratis (sin límites)
- ✅ No requiere backend
- ✅ Sin registro necesario
- ✅ Protección anti-spam con reCAPTCHA

### Pasos:

1. **Obtén tu Access Key**
   - Ve a: https://web3forms.com/
   - Ingresa tu email: `E_broofing@yahoo.com`
   - Te enviarán un Access Key

2. **Modifica tu formulario**
```javascript
<form 
  action="https://api.web3forms.com/submit" 
  method="POST"
  id="contact-form"
>
  <input type="hidden" name="access_key" value="TU_ACCESS_KEY_AQUI" />
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="tel" name="phone" placeholder="Phone Number" required />
  <textarea name="message" placeholder="Type message"></textarea>
  <button type="submit">Send Your Message</button>
</form>
```

---

## ✅ OPCIÓN 3: Backend PHP en Hostinger

### Ventajas:
- ✅ Control total
- ✅ Usa tu propio servidor SMTP de Hostinger
- ✅ Sin dependencias externas

### Desventajas:
- ⚠️ Requiere crear un archivo PHP
- ⚠️ Más complejo de configurar

### Pasos:

1. **Crea un archivo PHP en Hostinger**
   - Archivo: `public_html/send-email.php`

```php
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = htmlspecialchars($data['name'] ?? '');
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($data['phone'] ?? '');
    $message = htmlspecialchars($data['message'] ?? '');
    
    if (empty($name) || empty($email) || empty($phone)) {
        http_response_code(400);
        echo json_encode(['error' => 'Missing required fields']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email']);
        exit;
    }
    
    $to = 'E_broofing@yahoo.com';
    $subject = "New Service Request - $name ($phone)";
    
    $emailBody = "
    <html>
    <body style='font-family: Arial, sans-serif;'>
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
        <p><strong>Phone:</strong> <a href='tel:$phone'>$phone</a></p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: noreply@ebroofingma.net\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    if (mail($to, $subject, $emailBody, $headers)) {
        echo json_encode(['ok' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
```

2. **Modifica tu formulario JavaScript**
   - En `app/contact/page.js`, cambia el fetch a:

```javascript
const response = await fetch('https://ebroofingma.net/send-email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, message })
});
```

---

## 🎯 MI RECOMENDACIÓN

Para tu caso, **recomiendo Formspree o Web3Forms** porque:
1. ✅ Son más fáciles de configurar
2. ✅ No requieren mantenimiento
3. ✅ Tienen protección anti-spam
4. ✅ Son confiables y rápidos

**Formspree** si quieres una interfaz web para ver los envíos.
**Web3Forms** si solo necesitas recibir emails (100% gratis).

---

## 📝 SIGUIENTE PASO

Dime cuál opción prefieres y te ayudo a implementarla paso a paso.
