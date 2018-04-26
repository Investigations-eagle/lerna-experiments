import * as moment from 'moment';
class EGLogger {
    public static getLogger(appName: string) {
        const _moment: moment.Moment = moment();
        return (data: any) =>
            console.log(`${appName}:: ${_moment.format('x')} ms :: `, data || ''
        );
    }

}

export {EGLogger};
