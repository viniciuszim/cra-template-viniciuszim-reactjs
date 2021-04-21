import { getEnvVar } from 'helpers/helpers';

const basePath = getEnvVar('PUBLIC_URL', '/linos-automation-packstation');

export { basePath };
