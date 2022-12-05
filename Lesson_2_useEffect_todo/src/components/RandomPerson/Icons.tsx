
import { BsPersonFill, BsCalendarDate, BsMap, BsTelephone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { RiLockPasswordFill } from "react-icons/ri"
import RandomPersonJson from "./random_person.json"




interface IIcons {
    getInfo: (type: string, param: string) => void;
    randPerson: typeof RandomPersonJson;
    index: number
}



const Icons = ({ getInfo, randPerson, index }: IIcons) => {
    return (
        <>
            <div className="icons">
                <div onClick={() => getInfo("name", randPerson[index].first_name)}>
                    <BsPersonFill />
                </div>

                <div onClick={() => getInfo("email", randPerson[index].email)}>
                    <HiOutlineMail />
                </div>

                <div onClick={() => getInfo("age", randPerson[index].date_of_birth)}>
                    <BsCalendarDate />
                </div>

                <div onClick={() => getInfo("credit_card", randPerson[index].credit_card.cc_number)}>
                    <BsMap />
                </div>

                <div onClick={() => getInfo("telephone", randPerson[index].phone_number)}>
                    <BsTelephone />
                </div>

                <div onClick={() => getInfo("password", randPerson[index].password)}>
                    <RiLockPasswordFill />
                </div>
            </div>
        </>
    )
}

export default Icons