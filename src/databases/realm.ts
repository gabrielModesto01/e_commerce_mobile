import Realm from 'realm';
import { ProductSchemas } from './schemas/ProductSchemas';

export const getRealm = async () => await Realm.open({
    path: 'e-commerce-mobile',
    schema: [ProductSchemas],
});