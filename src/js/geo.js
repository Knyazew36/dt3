$(() => {
    const form = $('.geo-form')
    const items = $('.geo-items')
    const container = $('.geo__items')


    form.on('click', (e) => {
        e.preventDefault
        const target = e.target.dataset.btn
        if (!target) return


        const checks = $(form).find('input')
        let checked = []


        if (target === 'reset') {
            $(checks).prop('checked', false);
            $(container).html('');
        }
        if (target === 'submit') {
            $(container).html('');

            for (let item of checks) {
                if ($(item).is(':checked')) {
                    checked.push($(item).val())
                }
            }


            checked.forEach((e) => {
                render(e)
            })

            function render(value) {
                let item = $(
                    `
                <div class='geo__item' data-grad='${value}'>
                    <h1>${value}</h1>
                </div>
                `
                )

                container.append($(item))
            }
        }



    })
})

