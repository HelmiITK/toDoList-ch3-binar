// import { useState } from "react"
import PropTypes from "prop-types"

export default function FormAdd({ name, items, setItems, setName }) {


    const handleSubmit = (e) => {
        e.preventDefault();

        window.confirm(`Kamu menambahkan : "${name}" ke daftar listmu`);

        if (name.trim()) {

            setItems([
                ...items,
                {
                    id: items.length + 1,
                    task: name,
                    complete: false,
                },
            ]);

            setName('');
        }
    };


    return (
        <div className="mt-4 mb-3 p-4 border-2 border-slate-200 rounded-md">

            <form action="" onSubmit={handleSubmit}>
                <div className="flex">
                    <label htmlFor="edit">
                        <svg className="border-0 bg-cyan-500 rounded-s-md h-11 w-11 p-[6px]" fill="none" height="30" viewBox="0 0 20 20" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M15.8092 10.5478L10.9798 15.3772C10.6982 15.6588 10.4984 16.0116 10.4018 16.3979L10.0274 17.8958C9.86451 18.5472 10.4546 19.1372 11.106 18.9744L12.6039 18.5999C12.9902 18.5033 13.343 18.3036 13.6246 18.022L18.454 13.1926C19.1843 12.4622 19.1843 11.2781 18.454 10.5478C17.7237 9.81741 16.5395 9.81741 15.8092 10.5478ZM7 2.5C7 2.22386 6.77614 2 6.5 2C6.22386 2 6 2.22386 6 2.5V3H5.5C4.67157 3 4 3.67157 4 4.5V16.5C4 17.3284 4.67157 18 5.5 18H9.00286C9.01015 17.8859 9.02795 17.7701 9.05716 17.6532L9.43163 16.1554C9.57217 15.5932 9.86283 15.0798 10.2726 14.6701L15.102 9.84065C15.3683 9.5744 15.6738 9.37139 16 9.23163V4.5C16 3.67157 15.3284 3 14.5 3H14V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V3H10.5V2.5C10.5 2.22386 10.2761 2 10 2C9.72386 2 9.5 2.22386 9.5 2.5V3H7V2.5ZM7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7ZM13 10.5C13 10.7761 12.7761 11 12.5 11H7.5C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10H12.5C12.7761 10 13 10.2239 13 10.5ZM7.5 13H9.5C9.77614 13 10 13.2239 10 13.5C10 13.7761 9.77614 14 9.5 14H7.5C7.22386 14 7 13.7761 7 13.5C7 13.2239 7.22386 13 7.5 13Z" fill="white" /></svg>
                    </label>
                    <input value={name} onChange={(e) => {setName(e.target.value) 
                        console.log(name)}} className="border rounded-e-md p-2 pl-3 w-full" type="text" placeholder="Input/Edit Todo" id="edit" />
                </div>
                <div className="flex justify-between" >
                    <button type="submit" className="mt-4 border-0 bg-cyan-500 text-slate-100 text-center text-lg w-full p-2 rounded-md hover:bg-cyan-600">Submit</button>
                </div>
            </form>

        </div>
    )
}

FormAdd.propTypes = {
    name: PropTypes.object,
    items: PropTypes.object,
    setItems: PropTypes.object,
    setName: PropTypes.object,
}