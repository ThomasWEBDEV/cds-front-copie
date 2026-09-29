export const getServiceIcon = (logo) => {
  const iconMap = {
    'profile.png': 'mdi-account-outline',
    'folder.png': 'mdi-folder-outline',
    'usb.png': 'mdi-usb',
    'pc.png': 'mdi-laptop',
    'internet.png': 'mdi-web',
    'printer.png': 'mdi-printer-outline',
    'ipdiva.png': 'mdi-shield-check-outline',
    'software.png': 'mdi-application-cog-outline',
    'privacy.png': 'mdi-lock-outline',
    'gmail.png': 'mdi-email-outline',
    'google.png': 'mdi-google',
    'account.png': 'mdi-account-cog-outline',
    'dlc.jpg': 'mdi-calendar-clock',
    'achats.png': 'mdi-cart-outline',
    'sortie.png': 'mdi-account-minus-outline',
    'smartphones.png': 'mdi-cellphone',
    'telephonie.png': 'mdi-phone-outline',
    'phone.png': 'mdi-phone-check-outline',
    'vm.png': 'mdi-server',
    'taux-service.png': 'mdi-chart-bar'
  }
  return iconMap[logo] || 'mdi-file-document-outline'
}