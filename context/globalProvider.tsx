import React, { createContext, useContext, useEffect } from "react";
import { View } from 'react-native';
import Knex from 'knex';
import ExpoSQLiteDialect from '@expo/knex-expo-sqlite-dialect';
import { initial_migration } from '../api/init';
import Toast from 'react-native-toast-message';
interface GlobalProviderProps {
  children: React.ReactNode
}

const knex = Knex({

  client: ExpoSQLiteDialect,
  connection: {
    filename: 'inventory.db'
  },
  useNullAsDefault: true
});

const GlobalContext = createContext(knex as any);
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: GlobalProviderProps) => {

  useEffect(() => {
    const setup = async () => {
      const hasTable = await knex.schema.hasTable('items');
      console.log(hasTable, 'has table');

      if (!hasTable) {
        try {
          await initial_migration(knex);
          Toast.show({
            type: 'success',
            text1: 'Data initialized successfully! 🎉',
            text2: 'your data is here.'
          });
          console.log('done');
        }
        catch (error) {
          console.log(error)
          Toast.show({ 
            type: 'error',
            text1: 'Something went wrong...',
            text2: error.message 
          });
        }
      }
    };

    //async function teardown()  {
     // await knex.destroy();
      //console.log('tearing down...');
    //}

    setup();
    //return () => {
     // teardown();
    //};

  }, []);

  return (
    <GlobalContext.Provider
      value = {{ knex }}
    >
      {children}
    </GlobalContext.Provider>
  );
  
};

export default GlobalProvider;
