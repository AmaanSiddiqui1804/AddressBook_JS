
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        console.log(`Contact added: ${contact.firstName} ${contact.lastName}`);
    }

    displayAllContacts() {
        console.log("\n--- Address Book Contacts ---");
        this.contacts.forEach(contact => contact.displayContact());
    }
}
class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateAddressCityState(address, "Address");
        this.city = this.validateAddressCityState(city, "City");
        this.state = this.validateAddressCityState(state, "State");
        this.zip = this.validateZip(zip);
        this.phoneNumber = this.validatePhone(phoneNumber);
        this.email = this.validateEmail(email);
    }

    validateName(name, fieldName) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    validateAddressCityState(value, fieldName) {
        if (value.length < 4) {
            throw new Error(`${fieldName} must have at least 4 characters.`);
        }
        return value;
    }

    validateZip(zip) {
        const zipRegex = /^[1-9][0-9]{5}$/;
        if (!zipRegex.test(zip)) {
            throw new Error("Zip code must be a 6-digit number.");
        }
        return zip;
    }

    validatePhone(phone) {
        const phoneRegex = /^[6-9][0-9]{9}$/;
        if (!phoneRegex.test(phone)) {
            throw new Error("Phone number must be exactly 10 digits and start with 6-9.");
        }
        return phone;
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid email format.");
        }
        return email;
    }

    displayContact() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Address: ${this.address}, ${this.city}, ${this.state}, ${this.zip}`);
        console.log(`Phone: ${this.phoneNumber}`);
        console.log(`Email: ${this.email}`);
    }
}

// Test Cases

const addressBook = new AddressBook();

try {
    // Creating valid contacts
    const contact1 = new AddressBookContact(
        "Amaan", "Siddiqui",
        "123 Main St", "Bhopal", "Bhopal", "462021",
        "9876543210", "amaan@example.com"
    );
    
    const contact2 = new AddressBookContact(
        "Nishank", "Bathri",
        "123 Second Street", "Betul", "Madhya Pradesh", "460001",
        "8765432109", "nish.others@example.com"
    );

    try{ 
        const contact3 = new AddressBookContact(
            "Abhay", "Gautam",
            "789 sdnfk Street", "Satna", "Madhya Pradesh", "48001",
            "78984511", "abhaysd@c.s"
    );
    }
    catch (error) {
        console.error("Error in contact-3 " +error.message);
    }

    // Adding contacts to the address book
    addressBook.addContact(contact1);
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);
    
    // Displaying all contacts
    addressBook.displayAllContacts();

} catch (error) {
    console.error(error.message);
}

