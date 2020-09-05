﻿using System;
using System.Drawing;
using System.Numerics;
using ExoKomodo.Helpers.BlazingUI.Elements.Buttons;
using ExoKomodo.Helpers.P5;
using ExoKomodo.Helpers.P5.Enums;

namespace ExoKomodo.Pages.Users.Jorson.Games.Kaiju
{
    public class KaijuLabel
        : Label<string>
    {
        #region Public

        #region Constructors
        public KaijuLabel(P5App application)
        {
            Application = application;
        }
        #endregion

        #region Members
        public P5App Application { get; private set; }
        public Color TextColor { get; set; }
        #endregion

        #region Member Methods

        public override void Render()
        {
            var position = RenderPosition;
            Application.Push();
            Application.Fill(TextColor);
            Application.SetTextAlign(HorizontalTextAlign.Center, VerticalTextAlign.Center);
            Application.DrawText(Text, RenderPosition);
            Application.Pop();

            base.Render();
        }
        #endregion

        #endregion
    }
}