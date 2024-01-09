import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";

const AuthUserContext = createContext({
    authUser: null,
    isLoading: true,
});