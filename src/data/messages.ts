export interface Role {
  name: string;
  id: number;
}

const roles: Role[] = [
  {
    name: 'Мафия',
    id: 0
  },
  {
    name: 'Мирный',
    id: 0
  },
  {
    name: 'Путана',
    id: 0
  },
  {
    name: 'Дон',
    id: 0
  },
  {
    name: 'Комиссар',
    id: 0
  },
  {
    name: 'Доктор',
    id: 0
  },
];

export const getRoles = () => roles;