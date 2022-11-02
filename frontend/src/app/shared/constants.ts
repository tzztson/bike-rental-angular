export enum InvoiceType {
  Generated = 1,
  Upload = 2,
}

export enum Sort {
  Ascending = 1,
  Descending = -1,
}

export enum Size {
  MaxFileUploadSize = 1024 * 1024 * 5,
  ContractMaxFileSize = 1024 * 1024 * 5,
}

export enum ModalResponse {
  Yes = 'yes',
  No = 'no',
}
