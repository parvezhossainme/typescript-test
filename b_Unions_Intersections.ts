
// Union Types
const printID = (id: number | string) =>  {
    console.log( "ID " + id );
}

printID(12102085);

// Also define first
type IDFieldType = number | string;

const printID2 = (id: IDFieldType) => {
    console.log( "ID " + id );
}   

printID2("12102085");

// #---------------------------------------------
interface BusinessPartner {
    name: string;
    creditScore: number;
}

interface UserIdentity {
    id: number;
    email: string;
}

type Employee = BusinessPartner & UserIdentity; // Both types are merged

const signContract = ( employee : Employee ) : void => {
    console.log( "Signing contract for " + employee.name + " and email : "  + employee.email );
}

signContract( {
    name: "John Doe",
    creditScore: 100,
    id: 1,
    email: "XoN4s@example.com"
} );




