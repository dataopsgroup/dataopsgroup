
export const triggerFileDownload = () => {
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1I5hdGjfk62vYf_rMBWlrhrrj6p6SUS6h';
  
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'CMO-Data-Playbook-Sample-Chapter.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
