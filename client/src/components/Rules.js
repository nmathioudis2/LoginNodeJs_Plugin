import React from 'react';

export default () => {
    return (
        <div>
            <ul className="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-rules" role="tab"
                       aria-controls="pills-home" aria-selected="true">Rules</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-notifications"
                       role="tab"
                       aria-controls="pills-profile" aria-selected="false">Notifications</a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-rules" role="tabpanel"
                     aria-labelledby="pills-home-tab">
                    <form>
                    <h3>Security check</h3>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="status">Set restricted area check status</label>
                            <select className="custom-select" id="status">
                                <option defaultValue>Choose...</option>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="sTime">Set start time for Restriced area </label>
                            <input type="number" className="form-control" id="sTime"/>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="eTime">Set end time for Restriced area</label>
                            <input type="number" className="form-control" id="eTime"/>
                        </div>
                        <button type="submit" className='btn btn-primary'> Set security rules</button>
                    </div>
                </form>
                </div>
                <div className="tab-pane fade" id="pills-notifications" role="tabpanel"
                     aria-labelledby="pills-profile-tab">fasfas
                </div>
            </div>
        </div>
    );
};