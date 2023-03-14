const calculateFee = (money) => {
    return (money+3)+(money*0.001);
}

console.log(`The value she pay is : ${calculateFee(100)}$`);
