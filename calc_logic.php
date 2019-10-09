<?php


class Calc
{

    function calculate($firstNumber, $secondNumber, $operator){
        switch ($operator){
            case "+":
                $result = $firstNumber + $secondNumber;
                break;

            case "-":
                $result = $firstNumber - $secondNumber;
                break;

            case "*":
                $result = $firstNumber * $secondNumber;
                break;

            case "/":
                $result = $firstNumber / $secondNumber;
                break;
        }
        echo "$result";

    }

}