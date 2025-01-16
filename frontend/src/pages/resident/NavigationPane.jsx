import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button'

function NavigationPane() {

    const navigate = useNavigate();

    return (
    <>
    <Button
        text={"Request Item"}
        onClick={() => navigate('/resident/RequestItem')}
    /> 

    <Button
        text={"PreOrder Item"}
        onClick={() => navigate('/resident/PreOrderItem')}
    /> 

<Button
        text={"Request Vouchers"}
        onClick={() => navigate('/resident/vouchers')}
    />  

    <Button
        text={"View Transaction History"}
        onClick={() => navigate('/resident/TransactionHistory')}
    />  
    </>);
}

export default NavigationPane;