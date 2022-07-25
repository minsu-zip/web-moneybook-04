import { Component } from '../../core/component.js'
import './paymentbar.scss'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import Dropdown from '../Dropdown/Dropdown.js'

export default class PaymentBar extends Component {
  template() {
    return /*html*/ `
    <div class='paymentbar-container'>
        <form class='form-wrapper'>
            <div class='form-element'>
                <span class='form-element-title'>일자</span>
                <input class='form-element-input' placeholder='yyyymmdd'/>
            </div>
            <div class='form-element'>
                <span class='form-element-title'>분류</span>
            
                <div class="form-element-dropdown category">
                    <div class="category-select">선택하세요</div>
                    <div class="category-dropdown-replace"></div>
                </div>

            </div>
            <div class='form-element'>
                <span class='form-element-title'>내용</span>
                <input class='form-element-input' placeholder='입력하세요'/>
            </div>
            <div class='form-element'>
                <span class='form-element-title'>결제수단</span>
                    <select class="form-element-dropdown category">
                    <option selected disabled>선택하세요</option>
                </select>
            </div>
            <div class='form-element'>
                <span class='form-element-title'>금액</span> 
                <div class='price-input-wrapper'>
                        ${minus}
                        <input class='form-element-input' placeholder='입력하세요'/>
                        <span>원</span>
                    </div>
                </div>
            <button class='form-button'>
            ${plus}
            </button>
        </form>
    </div>
    `
  }

  handleClickCategorySelect(e) {
    const $dropdown = this.querySelector('.category .dropdown-ul')

    $dropdown.classList.toggle('active')
  }

  setEvent() {
    const $categorySelect = this.querySelector('.category-select')
    $categorySelect.addEventListener('click', this.handleClickCategorySelect.bind(this))
  }

  setComponent() {
    const $categoryDropdownReplaceElement = this.querySelector('.category-dropdown-replace')

    $categoryDropdownReplaceElement.replaceWith(new Dropdown())
  }
}

customElements.define('paymentbar-container', PaymentBar)
