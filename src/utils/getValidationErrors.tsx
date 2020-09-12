import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // [key:string] pode ser qualquer coisa, em vez de retornar um a um, nome key nao quer dizer nada poderia ser qualquer nome
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
