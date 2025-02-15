import { v4 as uuidv4 } from 'uuid';

export const users = [
    {
        id: uuidv4(),  // Automatisch generierte UUID
        username: "admin",
        password: "admin123",
        role: "admin",
        personalInfo: {
            firstName: "Admin",
            lastName: "User",
            email: "admin@example.com",
            phoneNumber: "+49 170 7654321",
            profilePicture: "https://example.com/path/to/admin-profile.jpg"
        },
        adminInfo: {
            permissions: ["manageUsers", "viewLogs", "configureSystem"],
            lastLogin: "2025-02-15T12:00:00Z",
            accountStatus: "active",
            securityLevel: "high"
        }
    },
    {
        id: uuidv4(),  // Automatisch generierte UUID
        username: "to-imp",
        password: "12345",
        role: "user",
        personalInfo: {
            firstName: "Tom",
            lastName: "Holler",
            email: "mail@example.com",
            birthdate: "1990-01-01",
            address: {
                street: "Musterstraße 1",
                city: "Musterstadt",
                postalCode: "12345"
            },
            profilePicture: "https://example.com/path/to/profile1.jpg"
        },
        optionalInfo: {
            phoneNumber: "+49 170 1234567",
            gender: "male",
            profileDescription: "Software developer with a focus on automation and digitalization.",
            language: "German"
        },
        socialMedia: {
            linkedin: "https://www.linkedin.com/in/tom-holler",
            twitter: "https://twitter.com/tom_holler"
        },
        userStatus: "active",
        accessCredentials: {
            apiKey: "abc123xyz456",
            otherSystems: {
                crmSystem: "crm123abc",
                ticketSystem: "ticket456xyz",
                cloudStorage: "cloud987def"
            }
        }
    },
];
