import {it, expect} from 'vitest';
import { addressValidator, myFunction } from './src/lib/formHandler.js';

// In formhandler.js, you must remove the comment of the import statement to make the test work: (import Web3 from 'web3';).
// Set the comment back when not testing anymore, otherwise the website will break.

it('Checking if WRONG account format provided', () => {

        // Arrange
        const account = 'WrongTypeOfAccount';
    
        // Act
        const result = addressValidator(account);
    
        // Assert
        expect(result).toBeFalsy();
})

it('Checking if empty string provided as account', () => {

        // Arrange
        const account = '';
    
        // Act
        const result = addressValidator(account);
    
        // Assert
        expect(result).toBeFalsy();
})

it('Checking if a number provided as account', () => {

        // Arrange
        const account = 12345;
    
        // Act
        const result = addressValidator(account);
    
        // Assert
        expect(result).toBeFalsy();
})


it('Checking if CORRECT account format provided', () => {

        // Arrange
        const account = '0x6F8Add60e7221538095Ca78f82Baf6245cb103Fd';
    
        // Act
        const result = addressValidator(account);
    
        // Assert
        expect(result).toBeTruthy();
})