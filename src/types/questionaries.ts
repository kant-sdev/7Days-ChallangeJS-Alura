export interface Questionary {
  key: keyof FormData;
  label: string;
  placeholder: string;
  icon: React.ComponentType<any>;
  type: string;
}

export interface FormData {
  nome: string;
  idade: string;
  linguagem: string;
}