export default function formateCurrency(num) {
    return "R" + Number(num.toFixed(1)).toLocaleString() + " "
}