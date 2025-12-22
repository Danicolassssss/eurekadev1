interface EmailToAdminProps {
  name: string;
  email: string;
  website?: string;
  type: string;
  budget: string;
  message: string;
}

export const generateEmailToAdminHtml = ({
  name,
  email,
  website,
  type,
  budget,
  message,
}: EmailToAdminProps): string => {
  return `
  <div style="font-family: sans-serif; color: #333;">
    <h1 style="color: #4f46e5;">Nouvelle demande de contact - Eurekadev</h1>
    <p>Vous avez reçu une nouvelle demande de contact via le site web.</p>
    
    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
      <h2 style="font-size: 18px; margin-top: 0;">Détails du contact</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
      ${website ? `<p><strong>Site web :</strong> <a href="${website}" target="_blank" rel="noopener noreferrer">${website}</a></p>` : ''}
      
      <h2 style="font-size: 18px; margin-top: 20px;">Détails du projet</h2>
      <p><strong>Type de besoin :</strong> ${type}</p>
      <p><strong>Budget :</strong> ${budget}</p>
      
      <h2 style="font-size: 18px; margin-top: 20px;">Message</h2>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  </div>
  `;
};


