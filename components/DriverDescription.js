// components/DriverDescription.js

function DriverDescription({ driver }) {
    console.log(driver)
    let description = "Qualities: ";
    switch (driver) {
        case 1:
            description += "Leadership, independence, ambition, natural leaders, driven and independent.";
            break;
        case 2:
            description += "Balance, cooperation, diplomacy, value balance and harmony in relationships.";
            break;
        case 3:
            description += "Creativity, optimism, communication, creative, optimistic, and talented communicators.";
            break;
        case 4:
            description += "Stability, structure, practicality, value stability and structure in their lives, and are practical and dependable.";
            break;
        case 5:
            description += "Freedom, adventure, versatility, value freedom and adventure, and are versatile and adaptable.";
            break;
        case 6:
            description += "Harmony, nurturing, responsibility, value harmony and nurturing in relationships, and have a sense of responsibility towards others.";
            break;
        case 7:
            description += "Introspection, spirituality, wisdom, introspective, spiritual, and wise beyond their years.";
            break;
        case 8:
            description += "Success, power, wealth, value success and power, and have a talent for creating wealth and abundance.";
            break;
        case 9:
            description += "Compassion, humanitarianism, idealism, have a strong sense of compassion and humanitarianism, and may be driven by idealistic pursuits.";
            break;
        case 11:
            description += "Coming soon!!";
            break;
        default:
            description += "Go to hell!";
    }
    return <div>{description}</div>;
}

export default DriverDescription;
