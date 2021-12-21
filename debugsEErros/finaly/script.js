try {
    let c = a + b;
} catch (e) {
    console.log(`Algo deu errado ${e}`);
} finally {
    console.log("Executou");
}