export function onInit(quoteLineModels) {
    console.log('RUNNING -----> onInit', 'arguments available ---> ', arguments);
    return Promise.resolve();
}
export function onBeforeCalculate(quoteModel, quoteLineModels) {
    console.log('RUNNING -----> onBeforeCalculate', 'arguments available ---> ', arguments);
    return Promise.resolve();
}
export function onBeforePriceRules(quoteModel, quoteLineModels) {
    console.log('RUNNING -----> onBeforePriceRules', 'arguments available ---> ', arguments);
    return Promise.resolve();
}
export function onAfterPriceRules(quoteModel, quoteLineModels) {
    console.log('RUNNING -----> onAfterPriceRules', 'arguments available ---> ', arguments);
    return Promise.resolve();
}
export function onAfterCalculate(quoteModel, quoteLineModels) {
    console.log('RUNNING -----> onAfterCalculate', 'arguments available ---> ', arguments);
    return Promise.resolve();
}   
