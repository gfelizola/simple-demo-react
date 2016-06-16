export default function(text) {

    if (text == null) {
        return null;
    }

    if (typeof text !== "string") {
        throw new TypeError();
    }

    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
