interface EmailToClientProps {
  name: string;
}

export const generateEmailToClientHtml = ({
  name,
}: EmailToClientProps): string => {
  return `
  <div style="font-family: sans-serif; color: #333;">
    <h1 style="color: #4f46e5;">Merci pour votre demande !</h1>
    <p>Bonjour ${name},</p>
    <p>J'ai bien reçu votre demande de contact via Eurekadev.</p>
    <p>Je vais étudier votre projet avec attention et je reviendrai vers vous très rapidement (généralement sous 24h) pour en discuter.</p>
    <p>En attendant, n'hésitez pas à consulter mes réalisations sur le site.</p>
    <br />
    <p>Cordialement,</p>
    <p><strong>Danny Grangeot</strong></p>
    <p><a href="https://eurekadev.fr" style="color: #4f46e5;">eurekadev.fr</a></p>
  </div>
  `;
};

