import createElement from './createElement.js';

const createFormPerson = (n) => {
    const form = createElement('form', {
        className: 'person',
    });

    const title = createElement('h2', {
        className: 'person__title',
        textContent: `Пассажир #${n + 1}`,
    });

    const fieldName = createElement('div', {
        className: 'field',
    });


    const labelName = createElement('field', {
        className: 'field__label',
        for: `name${n}`,
        textContent: 'Name and lastname',

    });

    const labelInput = createElement('input', {
        className: 'field__input',
        id: `name${n}`,
        name: 'name',
        type: 'text',
        placeholder: 'Input your name and lastname',
        required: true,
    });

    const fieldTicket = createElement('div', {
        className: 'field',
    });

    const ticketLabel = createElement('label', {
        className: 'field__label',
        for: `ticket${n}`,
        textContent: 'Номер билета (10 цифр)',
       
    });

    const ticketInput = createElement('input', {
        className: 'field__input',
        id: `ticket${n}`,
        name: 'ticket',
        type: 'text',
        placeholder: 'Номер билета',
        required: true,
        minLength: 10,
        maxLength: 10,
    })

    const button = createElement('button', {
        className: 'btn-confirm',
        type: 'submit',
        textContent: 'Подтвердить',
    })

    form.append(title, fieldName, fieldTicket, button);

    fieldName.append(labelName, labelInput);
    fieldTicket.append(ticketLabel, ticketInput);

    return form;
};

const getFormPerson = (count) => {
    const forms = [];
    if (count > 6) count = 6;
    for (let i = 0; i < count; i++) {
        forms.push(createFormPerson(i));
    }
    return forms;
};

export default getFormPerson;