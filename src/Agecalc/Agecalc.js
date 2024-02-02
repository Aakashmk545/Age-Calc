import { useState } from 'react';
import './Agecalc.css';
function Age() {

    let [val1, setval1] = useState();
    let [val2, setval2] = useState();


    let [milis, milis1] = useState('');
    let [second, second1] = useState('');
    let [minite, minite1] = useState('');
    let [hover, hover1] = useState('');
    let [day, day1] = useState('');
    let [week, week1] = useState('');
    let [month, month1] = useState('');
    let [yaers, yaers1] = useState('');

    const bob = new Date(val1);
    const today = new Date(val2);
    const ms = today - bob;
    const s = ms / 1000;
    const m = s / 60;
    const h = m / 60;
    const d = h / 24;
    const w = Math.floor(d / 7);
    const mo = (today.getMonth() - bob.getMonth()) + (12 * (today.getFullYear() - bob.getFullYear()));
    const y = Math.floor(mo / 12);


    const click = (e) => {
        if (!(val1 || val2)) {
            alert("ENTER DATE");

        }
        else {
            milis1(today - bob);
            second1(s);
            minite1(m);
            hover1(h);
            day1(d);
            week1(w);
            month1(mo);
            yaers1(y)
        }
    }



    return (
        <>


            <div className='bg-black p-4 '>
                <h1 className='bg-white text-black text-center py-4'>AGE CALCULATER </h1>
            </div>
            <div className="flex">


                <div className='main'>

                    <h2>ENTER BOB DATE</h2>
                    <input type="date" onChange={(e) => { setval1(e.target.value) }} className='input1'></input><br></br>
                    <h2>ENTER TODAY DATE</h2>

                    <input type="date" onChange={(e) => { setval2(e.target.value) }} className='input1'></input><br></br>
                    <br></br>


                    <input type='button' value="click me" onClick={click} className='btn1'></input>
                    <br></br>
                    <br></br>
                    <table>
                        <tr><td> yaer</td><td>:{yaers}</td></tr>
                        <tr><td> month</td><td>:{month}</td></tr>
                        <tr><td> day</td><td>:{day}</td></tr>
                        <tr><td> week</td><td>:{week}</td></tr>
                        <tr><td> hover</td><td>:{hover}</td></tr>
                        <tr><td> minite</td><td>:{minite}</td></tr>
                        <tr><td> second</td><td>:{second}</td></tr>
                        <tr><td> milisecond </td><td>:{milis}</td></tr>
                    </table>

                </div>
            </div>

        </>
    )
}
export default Age;