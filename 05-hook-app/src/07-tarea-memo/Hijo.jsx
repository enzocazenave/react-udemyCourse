import { memo } from 'react'

export const Hijo = memo(({ numero, incrementar }) => {
    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
