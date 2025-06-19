import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AuthModel, AuthState } from '../models/AuthModel';
import { sendEmailCode, validateCodeApi } from '../controllers/AuthController';

type AuthContextProps = {
    state: AuthState;
    sendCode: (email: string) => Promise<void>;
    validateCode: (email: string, code: string) => Promise<void>;
    isAuthenticated: () => boolean;
    reset: () => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const model = new AuthModel();
    const [state, setState] = useState<AuthState>({ ...model['state'] });

    const updateState = () => {
        setState({ ...model['state'] });
    };

    const sendCode = async (email: string) => {
        try {
            model.setEmail(email);
            model.setCode(gerarCodigoAleatorio());
            updateState();
            await sendEmailCode(email, model.getCode());
        } catch(e) {
            console.log('Erro ao enviar o e-mail com o código', e)
        } finally {
            updateState();
        }
    };

    const validateCode = async (email: string, code: string) => {
        try {
            await validateCodeApi(email, code);
            model.authenticate();
        } catch {
            console.log('Erro ao validar o código')
        } finally {
            updateState();
        }
    };

    const isAuthenticated = () => model.isAuth();

    const reset = () => {
        model.reset();
        updateState();
    };

    return (
        <AuthContext.Provider value={{ state, sendCode, validateCode, isAuthenticated, reset }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

function gerarCodigoAleatorio() {
  let codigo = '';
  for (let i = 0; i < 6; i++) {
    codigo += Math.floor(Math.random() * 10);
  }
  return codigo;
}
