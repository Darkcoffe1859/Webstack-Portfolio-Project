// src/services/contactService.js
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Import the Firestore db instance

// Function to add a contact
const addContact = async (contact) => {
    try {
        const docRef = await addDoc(collection(db, "contacts"), contact);
        console.log("Contact added with ID: ", docRef.id);
        return docRef.id;  // Return the document ID after adding contact
    } catch (error) {
        console.error("Error adding contact: ", error);
        throw error;  // Ensure error is propagated
    }
};

// Function to get all contacts
const getContacts = async () => {
    try {
        const contactsCol = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsCol);
        const contactList = contactSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return contactList;
    } catch (error) {
        console.error("Error fetching contacts: ", error);
        return [];
    }
};

// Export both functions
export { addContact, getContacts };

