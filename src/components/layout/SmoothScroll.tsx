'use client';
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    /**
     * Lightweight Native Smooth Scroll
     * Uses window.scrollTo — preserves sticky / scrub sections (no CSS transforms).
     */
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var targetY = window.scrollY || 0;
    var currentY = targetY;
    var rafId = 0;
    var ease = 0.085; // Easing speed (lower = smoother/slower)
    var active = true;

    function maxScrollY() {
      return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    }

    function stopRaf() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }

    function tick() {
      currentY += (targetY - currentY) * ease;
      
      // Snap to target if very close to prevent endless micro-calculations
      if (Math.abs(targetY - currentY) < 0.3) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        rafId = 0;
        return;
      }
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(tick);
    }

    function startRaf() {
      if (!rafId) rafId = requestAnimationFrame(tick);
    }

    // Prevent smooth scroll on elements that have their own scrollbars (like modals/dropdowns)
    function isNestedScrollable(startEl: Element | null) {
      var el = startEl;
      while (el && el !== document.body && el !== document.documentElement) {
        var style = window.getComputedStyle(el);
        var oy = style.overflowY;
        if ((oy === 'auto' || oy === 'scroll' || oy === 'overlay') && el.scrollHeight > el.clientHeight + 1) {
          return true;
        }
        el = el.parentElement;
      }
      return false;
    }

    function onWheel(e: WheelEvent) {
      if (!active || reduceMotion.matches) return;
      if (e.ctrlKey || e.metaKey) return; // Allow zooming
      if (isNestedScrollable(e.target as Element)) return;

      e.preventDefault();
      
      // Normalize trackpad vs mouse wheel
      var delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 16;
      if (e.deltaMode === 2) delta *= window.innerHeight;
      
      targetY += delta;
      targetY = Math.max(0, Math.min(maxScrollY(), targetY));
      
      startRaf();
    }

    // Sync targetY if user drags the native scrollbar
    function onScroll() {
      if (!active) return;
      if (rafId) {
        if (Math.abs(window.scrollY - currentY) > 2.5) {
          stopRaf();
          targetY = currentY = window.scrollY;
        }
        return;
      }
      targetY = currentY = window.scrollY;
    }

    function onResize() {
      if (!active) return;
      targetY = Math.max(0, Math.min(maxScrollY(), targetY));
      currentY = window.scrollY;
    }

    // Add Event Listeners
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      active = false;
      stopRaf();
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}
