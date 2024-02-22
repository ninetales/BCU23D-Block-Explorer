import { expect, it } from 'vitest';

it('Should return balance (typeof number)', () => {

    // Arrange
    const balance = 1337;

    // Act
    const result = balance;

    // Assert
    expect(typeof result).toBe('number');

});

it('Should return NaN(Not a number) if the value is not numerical', () => {

    // Arrange
    const balance = ['test', 1];

    // Act
    const result = balance;

    // Assert
    expect(result).toBeNaN();

});

it('Should be true if input field is empty', () => {

    // Arrange
    let inputValue = '';

    // Act
    const result = inputValue;

    // Assert
    expect(result).toBeFalsy();

});

it('Should be true if input field is NOT empty', () => {

    // Arrange
    let inputValue = '123test';

    // Act
    const result = inputValue;

    // Assert
    expect(result).toBeTruthy();

});