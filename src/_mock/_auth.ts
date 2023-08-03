// _mock
import { _mock } from 'src/_mock';

// ----------------------------------------------------------------------

export const JWT_SECRET = 'minimal-secret-key';

export const JWT_EXPIRES_IN = '3 days';

export const _users = [
  {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Jonathan Rojas',
    email: 'zilex@test.com',
    password: 'test1234',
    photoURL: _mock.image.avatar(24),
    phoneNumber: '918039021',
    country: 'Perú',
    address: 'Lima, Ate-Salamanca',
    state: 'Lima',
    city: 'Ate',
    zipCode: '051',
    about: 'Lider de TI',
    role: 'admin',
    isPublic: true,
  },
  {
    id: '8864c717-587d-472a-929a-8e5f298024da-1',
    displayName: 'Jonathan Rojas 2',
    email: 'zilex1@test.com',
    password: 'test12341',
    photoURL: _mock.image.avatar(25),
    phoneNumber: '918039021',
    country: 'Perú',
    address: 'Lima, Ate-Salamanca',
    state: 'Lima',
    city: 'Ate',
    zipCode: '051',
    about: 'Lider de TI',
    role: 'admin',
    isPublic: true,
  },
];
