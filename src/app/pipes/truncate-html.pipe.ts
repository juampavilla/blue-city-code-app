import { Pipe, PipeTransform } from '@angular/core';
import { TruncateState } from '../model/mediumPosts';

@Pipe({
  name: 'truncateHtml',
  standalone: true
})
export class TruncateHtmlPipe implements PipeTransform {
  transform(html: string, maxLength: number = 300): string {
    if (!html) return '';

    const doc = new DOMParser().parseFromString(html, 'text/html');

    const state: TruncateState = {
      truncatedHtml: '',
      charCount: 0
    };    

    this.traverseNodes(doc.body, maxLength, state);

    return state.truncatedHtml;
  }

  private traverseNodes(node: Node, maxLength: number, state: TruncateState) {
    if (state.charCount >= maxLength) return;
  
    if (node.nodeType === Node.TEXT_NODE) {
      const remaining = maxLength - state.charCount;
      state.truncatedHtml += node.textContent?.slice(0, remaining);
      state.charCount += node.textContent?.length || 0;
  
      if (state.charCount >= maxLength) {
        state.truncatedHtml += '...';
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      state.truncatedHtml += `<${(node as Element).tagName.toLowerCase()}>`;
      node.childNodes.forEach(child => this.traverseNodes(child, maxLength, state));
      state.truncatedHtml += `</${(node as Element).tagName.toLowerCase()}>`;
    }
  }
}