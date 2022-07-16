import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    useEffect(()=> {
        axios.get("http://localhost:8080/sales")
            .then(response => {
                console.log(response.data);
            })
    }, []);


    return (
        <>
            <div className="card">
                <h2 className="titulo-vendas">Vendas</h2>

                <div>
                    <div className="box-formulario">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="controle-form"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="box-formulario">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="controle-form"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="tabela-vendas">
                        <thead>
                            <tr>
                                <th className="mostrar-992">ID</th>
                                <th className="mostrar-576">Data</th>
                                <th>Vendedor</th>
                                <th className="mostrar-992">Visitas</th>
                                <th className="mostrar-992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="mostrar-992">#341</td>
                                <td className="mostrar-576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="mostrar-992">15</td>
                                <td className="mostrar-992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="box-botao">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mostrar-992">#341</td>
                                <td className="mostrar-576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="mostrar-992">15</td>
                                <td className="mostrar-992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="box-botao">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mostrar-992">#341</td>
                                <td className="mostrar-576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="mostrar-992">15</td>
                                <td className="mostrar-992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="box-botao">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>

            </div>
        </>
    )
}

export default SalesCard;