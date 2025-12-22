interface EmailToClientProps {
  name: string;
}

export const generateEmailToClientHtml = ({
  name,
}: EmailToClientProps): string => {
  const currentYear = new Date().getFullYear();
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Confirmation de réception</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header with Logo -->
          <tr>
            <td style="padding: 30px 40px; background-color: #ffffff; text-align: center; border-bottom: 1px solid #e4e4e7;">
              <img src="https://eurekadev.fr/eurekadevlogo.png" alt="Eurekadev Logo" width="150" style="display: block; margin: 0 auto; max-width: 100%; height: auto;">
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <h1 style="margin: 0 0 20px; font-size: 24px; font-weight: bold; color: #18181b; text-align: center;">Merci pour votre message !</h1>
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #3f3f46;">Bonjour <strong>${name}</strong>,</p>
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #3f3f46;">J'ai bien reçu votre demande de contact via le site Eurekadev.</p>
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #3f3f46;">Je vais étudier votre projet avec attention et je reviendrai vers vous très rapidement (généralement sous 24h) pour en discuter plus en détail.</p>
              
              <!-- Button -->
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin: 30px auto;">
                <tr>
                  <td align="center" style="border-radius: 6px; background-color: #4f46e5;">
                    <a href="https://eurekadev.fr" style="display: inline-block; padding: 12px 24px; font-size: 16px; font-weight: bold; color: #ffffff; text-decoration: none; border-radius: 6px;">Visiter le site</a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #3f3f46;">Cordialement,<br><strong>Danny Grangeot</strong></p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f4f4f5; text-align: center; border-top: 1px solid #e4e4e7;">
              <p style="margin: 0; font-size: 12px; color: #71717a;">&copy; ${currentYear} Eurekadev. Tous droits réservés.</p>
              <p style="margin: 5px 0 0; font-size: 12px; color: #71717a;"><a href="https://eurekadev.fr" style="color: #4f46e5; text-decoration: none;">eurekadev.fr</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
