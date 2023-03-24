import express from 'express';
import {
    getUser,
    getUserFiends,
    addRemoveFriend,
} from "../controllers/user.js";
import { verifyToken } from '../middleware/auth.js';