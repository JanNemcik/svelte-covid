import format from './format'
import { DateTime } from 'luxon'

function parseUsStats(usStatRaw) {
    return {
        cases: format.number(usStatRaw.positive),
        deaths: format.number(usStatRaw.death),
        recovered: format.number(usStatRaw.recovered),
        ventilator: format.number(usStatRaw.onVentilatorCurrently),
        hospitalized: format.number(usStatRaw.hospitalized),
        icu: format.number(usStatRaw.inIcuCurrently),
        tested: format.number(usStatRaw.totalTestResults),
        updated: DateTime.fromISO(usStatRaw.lastModified).toFormat('DDDD t')
    }
}

export default { parseUsStats }