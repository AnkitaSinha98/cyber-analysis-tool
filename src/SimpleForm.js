import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from '../src/Review';


class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}! What is your gender?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'male', label: 'Male', trigger: '5' },
                { value: 'female', label: 'Female', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'How old are you?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            {
              id: '7',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: '8' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
                return true;
            }
            },
            {
                id: '8',
                message: 'Thanks! Your data was submitted successfully!',
                trigger: '9',
            },
            {
                id: '9',
                message: 'Would you like to know about this application?',
                trigger: 'if-application',
            },
            {
                id: 'if-application',
                options: [
                  { value: 'yes', label: 'Yes', trigger: 'app' },
                  { value: 'no', label: 'No', trigger: 'end-message' },
                ],
              },
            {
                id: 'app',
                message: 'This is a cyber analysis tool using which malware detection and prediction is possible. Also we provide analysis and monitoring functionality like domain scaning and IP address scanning.',
                trigger: 'end-message',
            },
        //      {
            
        //         id: '10',
        //         message: 'What would you like to use?',
        //         trigger: 'tools',
        //     },
        //    {
        //         id: 'tools',
        //         options: [
        //           { value: 'Scan', label: 'Scan', trigger: 'Scan' },
        //           { value: 'Prediction', label: 'Prediction', trigger: 'Prediction' },
        //           { value: 'Analysis', label: 'Analysis', trigger: 'Analysis' },
        //         ],
        //       },
         
            { 
               id: 'end-message',
               message: 'Have a good day!!',
               end: true,
            },
          
            ]}
        />
      );
    }
  }
  
  export default SimpleForm;