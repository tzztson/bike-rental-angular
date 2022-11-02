enum Extensions { // please note this is only the . extension, not the mimetype as this is inherited from the filename
  Png = 'png',
  Jpg = 'jpg',
  Jpeg = 'jpeg',
  Pdf = 'pdf',
  Doc = 'doc',
  Docx = 'docx',
  Odt = 'odt',
  Txt = 'txt',
  Rtf = 'rtf',
}

export const allowedResumeExtensions: string[] = [
  Extensions.Pdf,
  Extensions.Doc,
  Extensions.Docx,
  Extensions.Png,
  Extensions.Jpeg,
  Extensions.Jpg,
];
export const allowedAvatarExtensions: string[] = [
  // TODO: Fix implementation
  Extensions.Png,
  Extensions.Jpeg,
  Extensions.Jpg,
];
