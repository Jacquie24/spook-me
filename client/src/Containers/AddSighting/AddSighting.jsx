import React from 'react';

const AddSighting = () => {
    return (
        <div className="container mt-5">
            <div className="columns">
                <div className="column is-3 is-offset-3">
                <span class="icon-text">
  <span class="icon">
    <i class="fa fa-camera"></i>
  </span>
  <span>Upload image</span>
</span>
                </div>
                </div>
            <div className="columns">
            <div className="column is-6 is-offset-3">
            <div className="field">
  <label className="label">Username</label>
  <div className="control">
    <input className="input" type="text" placeholder="Username" />
  </div>
</div>

<div className="field">
  <label className="label">Title</label>
  <div className="control">
    <input className="input" type="text" placeholder="Sighting name" />
  </div>
</div>

<div className="field">
  <label className="label">Address</label>
    <input className="input is-danger" type="text" placeholder="Street address" />
  </div>

<div className="field is-grouped">
<p className="control is-expanded">
  <label className="label">City</label>
  </p>
  <label className="label">State</label>
  </div>


<div className="field is-grouped">
<input className="input is-danger" type="text" placeholder="Street address" />

  <div className="control">
    <div className="select">
      <select>
        <option>Select dropdown</option>
        <option>AL</option>
        <option>AK</option>
        <option>AZ</option>
        <option>GA</option>
        <option>NC</option>
        <option>SC</option>
      </select>
      </div>
    </div>
  </div>


<div className="field">
  <label className="label">Description</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
  <div className="control">
    <button className="button is-link is-light">Cancel</button>
  </div>
</div>
        </div>
        </div>
        </div>
    );
};

export default AddSighting;