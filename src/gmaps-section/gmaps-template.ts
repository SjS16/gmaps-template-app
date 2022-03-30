export const GMapsTemplate = {
  templates: {
    children: {
      id: "children",
      name: "Google Maps",
      defaultLayoutId: "GmapsLarge001",
      renderer: "grid",
      layouts: {
        GmapsLarge001: {
          id: "GmapsLarge001",
          displayName: "Google Maps Desktop",
          data: {
            columns: { type: "auto", count: 12 },
            columnGap: 12,
            padding: {
              top: 85,
              right: 0,
              bottom: 85,
              left: 0,
            },
          },
          slots: {
            heading: {
              order: 0,
              visible: true,
              column: {
                start: 1,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "center",
                y: "center",
              },
            },
            description: {
              order: 1,
              visible: true,
              column: {
                start: 1,
                end: 6,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "center",
                y: "center",
              },
            },
            gmaps: {
              order: 2,
              visible: true,
              column: {
                start: 7,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "stretch",
                y: "stretch",
              },
            },
          },
        },
        GmapsLarge002: {
          id: "GmapsLarge002",
          displayName: "Google Maps Desktop",
          data: {
            columns: { type: "auto", count: 12 },
            columnGap: 12,
            padding: {
              top: 85,
              right: 0,
              bottom: 85,
              left: 0,
            },
          },
          slots: {
            heading: {
              order: 0,
              visible: true,
              column: {
                start: 1,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "center",
                y: "center",
              },
            },
            description: {
              order: 2,
              visible: true,
              column: {
                start: 7,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "center",
                y: "center",
              },
            },
            gmaps: {
              order: 1,
              visible: true,
              column: {
                start: 1,
                end: 6,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "stretch",
                y: "stretch",
              },
            },
          },
        },
        GmapsSmall001: {
          id: "GmapsSmall001",
          displayName: "Google Maps Mobile",
          data: {
            columns: { type: "auto", count: 12 },
            columnGap: 12,
            padding: {
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            },
          },
          slots: {
            heading: {
              order: 0,
              visible: true,
              column: {
                start: 1,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "stretch",
                y: "stretch",
              },
            },
            description: {
              order: 1,
              visible: true,
              column: {
                start: 1,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "stretch",
                y: "stretch",
              },
            },
            gmaps: {
              order: 2,
              visible: true,
              column: {
                start: 1,
                end: 13,
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              },
              alignment: {
                x: "stretch",
                y: "stretch",
              },
            },
          },
        },
      },
      slots: {
        heading: {
          placeholder: {
            contentTypeId: "heading1",
            data: {
              value: "Google Maps Section",
              styles: {
                textAlign: "center",
              },
            },
            overrides: {},
          },
        },
        description: {
          placeholder: {
            contentTypeId: "text",
            data: {
              value: [
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    },
                  ],
                },
              ],
            },
            overrides: {},
          },
        },
        gmaps: {
          placeholder: {
            contentTypeId: "gmaps",
            data: {
              address: "123 Main St",
              height: 200,
              width: 300,
            },
            overrides: {},
          },
        },
      },
      options: {
        "001": {
          id: "001",
          displayName: "Google Maps 1",
          breakpoints: {
            lg: {
              layoutId: "GmapsLarge001",
            },
            sm: {
              layoutId: "GmapsSmall001",
            },
          },
        },
        "002": {
          id: "002",
          displayName: "Google Maps 2",
          breakpoints: {
            lg: {
              layoutId: "GmapsLarge002",
            },
            sm: {
              layoutId: "GmapsSmall001",
            },
          },
        },
      },
      breakpoints: {
        sm: {
          maxWidth: 768,
        },
        lg: {
          minWidth: 769,
        },
      },
    },
  },
};
