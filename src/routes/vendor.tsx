import React, { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { type Product } from "@/lib/data";
import { useProducts } from "@/context/ProductContext";
import {
  Star,
  BadgeCheck,
  MessageCircle,
  Clock,
  Users,
  Package,
  ChevronRight,
  Gift,
  Sparkles,
  Share2,
  Heart,
  Ribbon,
  Plus,
  Pencil,
  Trash2,
  Search,
  X,
  Send,
  ShoppingBag,
  ImagePlus,
  ImageOff,
  MapPin,
  Phone,
  Mail,
  Globe,
  Store,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Filter,
  MoreHorizontal,
} from "lucide-react";

/**
 * Professional Vendor Dashboard + Storefront
 * Gift Marketplace / AliExpress-inspired
 * WhatsApp Business-style vendor profile features
 */

const palette = {
  bg: "#FFF9FB",
  surface: "#FFFFFF",
  surfaceTint: "#FFF6FA",
  ink: "#2B1A22",
  inkSoft: "#8A6B76",
  hairline: "#F3DCE6",
  rose: "#C2185B",
  roseDark: "#9E1450",
  roseSoft: "#FCE7EF",
  roseSofter: "#FFF0F6",
  blush: "#F9D9E6",
  success: "#1B8A5A",
  successSoft: "#E8F7F0",
  warning: "#D97706",
};

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,440;9..144,560;9..144,650&family=Inter:wght@400;500;600;700&display=swap');

.vendor-page * {
  box-sizing: border-box;
}

.vendor-page {
  font-family: 'Inter', sans-serif;
  color: ${palette.ink};
}

.vendor-display {
  font-family: 'Fraunces', serif;
}

.vendor-page button,
.vendor-page input,
.vendor-page textarea,
.vendor-page select {
  font-family: inherit;
}

@keyframes vp-rise {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.vp-hero-anim {
  animation: vp-rise 0.6s ease-out both;
}

.vp-tab-btn {
  position: relative;
  transition: color 0.15s ease;
}

.vp-tab-btn[data-active="true"]::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -13px;
  height: 2px;
  background: ${palette.rose};
}

.vp-focus:focus-visible {
  outline: 2px solid ${palette.rose};
  outline-offset: 2px;
}

.vp-primary-btn {
  transition: background 0.15s ease, transform 0.15s ease;
}

.vp-primary-btn:hover {
  background: ${palette.roseDark};
  transform: translateY(-1px);
}

.vp-card-hover {
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.vp-card-hover:hover {
  box-shadow: 0 10px 28px rgba(194, 24, 91, 0.1);
  transform: translateY(-2px);
}

.vp-row:hover {
  background: ${palette.roseSofter};
}

.vp-input:focus {
  outline: none;
  border-color: ${palette.rose} !important;
  box-shadow: 0 0 0 3px rgba(194, 24, 91, 0.08);
}

.vp-conv:hover {
  background: ${palette.roseSofter};
}

.vp-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.vp-scrollbar::-webkit-scrollbar-thumb {
  background: ${palette.blush};
  border-radius: 20px;
}

@media (max-width: 800px) {
  .vendor-overview-grid {
    grid-template-columns: 1fr !important;
  }

  .vendor-products-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }

  .vendor-table-header,
  .vendor-product-row {
    grid-template-columns: minmax(0, 1fr) 75px 60px !important;
  }

  .vendor-table-category,
  .vendor-table-actions-label {
    display: none !important;
  }

  .vendor-product-actions {
    grid-column: 1 / -1;
    justify-content: flex-end !important;
    margin-top: 8px;
  }

  .messages-panel {
    grid-template-columns: 1fr !important;
  }

  .messages-sidebar {
    border-right: none !important;
    border-bottom: 1px solid ${palette.hairline};
    max-height: 190px;
    overflow-y: auto;
  }
}

@media (max-width: 560px) {
  .vendor-page {
    padding: 14px 10px 40px !important;
  }

  .vendor-products-grid {
    grid-template-columns: 1fr 1fr !important;
  }

  .vendor-form-grid {
    grid-template-columns: 1fr !important;
  }

  .vendor-hero-actions {
    width: 100%;
  }

  .vendor-hero-actions button:last-child {
    flex: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .vp-hero-anim {
    animation: none;
  }

  .vp-card-hover,
  .vp-primary-btn {
    transition: none;
  }
}
`;

const ICONS: Record<string, React.ElementType> = {
  Gift,
  Sparkles,
  Package,
  Ribbon,
  Heart,
  Star,
};

const ICON_NAMES = Object.keys(ICONS);

type VendorProfile = {
  name: string;
  location: string;
  hours: string;
  phone: string;
  email: string;
  website: string;
};

type MessageSender = "buyer" | "vendor";

type VendorMessage = {
  from: MessageSender;
  text: string;
  time: string;
};

type Conversation = {
  id: number;
  name: string;
  initial: string;
  unread: number;
  status: string;
  messages: VendorMessage[];
};

type ProductFormData = {
  name: string;
  price: string | number;
  stock: string | number;
  category: string;
  description: string;
  icon: string;
  image: string | null;
  mrp?: number;
  rating?: number;
  reviews?: number;
  emoji?: string;
  tags?: string[];
  status?: string;
};

type ProductUpdateData = ProductFormData;

const initialConversations: Conversation[] = [
  {
    id: 1,
    name: "Amara J.",
    initial: "A",
    unread: 2,
    status: "Online",
    messages: [
      {
        from: "buyer",
        text: "Hi, can the keepsake box be engraved with two names?",
        time: "10:02 AM",
      },
      {
        from: "buyer",
        text: "Also, does it ship in a gift box already?",
        time: "10:03 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Devon R.",
    initial: "D",
    unread: 0,
    status: "Last seen today",
    messages: [
      {
        from: "buyer",
        text: "Order #4021 arrived today, it's lovely, thank you!",
        time: "Yesterday",
      },
      {
        from: "vendor",
        text: "So glad it arrived safely! Thank you for the order.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 3,
    name: "Priya N.",
    initial: "P",
    unread: 1,
    status: "Online",
    messages: [
      {
        from: "buyer",
        text: "Do you have the wrapping paper in a plain kraft option?",
        time: "Mon",
      },
    ],
  },
];

function StoreBanner() {
  return (
    <div
      className="vp-hero-anim"
      style={{
        position: "relative",
        height: 180,
        borderRadius: 18,
        overflow: "hidden",
        background: `linear-gradient(120deg, ${palette.rose} 0%, ${palette.roseDark} 100%)`,
      }}
    >
      <svg
        viewBox="0 0 800 180"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.55,
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={i}
            cx={i * 75 + 30}
            cy={i % 2 === 0 ? 35 : 135}
            r={i % 2 === 0 ? 48 : 62}
            fill="rgba(255,255,255,0.06)"
          />
        ))}
      </svg>

      <div
        style={{
          position: "absolute",
          left: 30,
          bottom: 26,
          color: "#fff",
          zIndex: 2,
        }}
      >
        <div
          className="vendor-display"
          style={{
            fontSize: 30,
            fontWeight: 650,
          }}
        >
          Thoughtful gifts for every moment
        </div>

        <div
          style={{
            marginTop: 6,
            fontSize: 13,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Handmade • Personalised • Carefully wrapped
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 28,
          top: 24,
          fontFamily: "'Fraunces', serif",
          fontSize: 13,
          letterSpacing: "0.02em",
          color: "rgba(255,255,255,0.85)",
          fontStyle: "italic",
        }}
      >
        wrapped with care, since 2018
      </div>
    </div>
  );
}

function StatChip({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Icon size={16} color={palette.inkSoft} />

      <span
        style={{
          fontSize: 13.5,
          color: palette.inkSoft,
        }}
      >
        <strong
          style={{
            color: palette.ink,
            fontWeight: 700,
          }}
        >
          {value}
        </strong>{" "}
        {label}
      </span>
    </div>
  );
}

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart?: () => void }) {
  const Icon = ICONS[product.icon ?? "Gift"] || Gift;

  return (
    <div
      className="vp-card-hover"
      style={{
        background: palette.surface,
        border: `1px solid ${palette.hairline}`,
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 150,
          background: palette.roseSoft,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <Icon size={40} color={palette.rose} strokeWidth={1.5} />
        )}

        {product.stock < 10 && (
          <span
            style={{
              position: "absolute",
              top: 10,
              left: 10,
              background: "#fff",
              color: palette.roseDark,
              padding: "4px 8px",
              borderRadius: 999,
              fontSize: 10.5,
              fontWeight: 700,
            }}
          >
            Low stock
          </span>
        )}
      </div>

      <div style={{ padding: 14 }}>
        <div
          style={{
            fontSize: 13.5,
            fontWeight: 600,
            lineHeight: 1.4,
            minHeight: 38,
          }}
        >
          {product.name}
        </div>

        <div
          style={{
            fontSize: 11.5,
            color: palette.inkSoft,
            marginTop: 6,
            minHeight: 32,
            lineHeight: 1.4,
          }}
        >
          {product.description}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginTop: 14,
          }}
        >
          <span
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: palette.roseDark,
            }}
          >
            ${product.price.toFixed(2)}
          </span>

          <span
            style={{
              fontSize: 11,
              color: palette.inkSoft,
            }}
          >
            {product.stock} available
          </span>
        </div>

        {onAddToCart && (
          <button
            type="button"
            onClick={onAddToCart}
            className="vp-primary-btn vp-focus"
            style={{
              marginTop: 12,
              width: "100%",
              border: "none",
              background: palette.rose,
              color: "#fff",
              borderRadius: 9,
              padding: "9px",
              cursor: "pointer",
              fontSize: 12.5,
              fontWeight: 600,
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

function BusinessInfoCard({ vendor, onEdit }: { vendor: VendorProfile; onEdit: () => void }) {
  const info = [
    {
      icon: MapPin,
      label: "Business location",
      value: vendor.location,
    },
    {
      icon: Clock,
      label: "Business hours",
      value: vendor.hours,
    },
    {
      icon: Phone,
      label: "Phone number",
      value: vendor.phone,
    },
    {
      icon: Mail,
      label: "Business email",
      value: vendor.email,
    },
    {
      icon: Globe,
      label: "Website",
      value: vendor.website,
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid ${palette.hairline}`,
        borderRadius: 14,
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Business information
          </div>

          <div
            style={{
              fontSize: 12,
              color: palette.inkSoft,
              marginTop: 3,
            }}
          >
            WhatsApp Business-style profile
          </div>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="vp-focus"
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            border: `1px solid ${palette.hairline}`,
            background: "#fff",
            cursor: "pointer",
          }}
        >
          <Pencil size={14} color={palette.inkSoft} />
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {info.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              style={{
                display: "flex",
                gap: 11,
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: palette.roseSoft,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={15} color={palette.roseDark} />
              </div>

              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: palette.inkSoft,
                    marginBottom: 2,
                  }}
                >
                  {item.label}
                </div>

                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 500,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: `1px solid ${palette.hairline}`,
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 12.5,
          color: palette.success,
          fontWeight: 600,
        }}
      >
        <CheckCircle2 size={16} />
        Verified business account
      </div>
    </div>
  );
}

function MessagesSummaryCard({
  conversations,
  onOpen,
}: {
  conversations: Conversation[];
  onOpen: () => void;
}) {
  const unreadTotal = conversations.reduce((sum, conversation) => {
    return sum + conversation.unread;
  }, 0);

  const preview = conversations.slice(0, 3);

  return (
    <div
      className="vp-card-hover"
      style={{
        background: palette.surface,
        border: `1px solid ${palette.hairline}`,
        borderRadius: 14,
        padding: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: palette.rose,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MessageCircle size={20} color="#fff" />
        </div>

        <div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Buyer messages
          </div>

          <div
            style={{
              fontSize: 11.5,
              color: palette.inkSoft,
              marginTop: 3,
            }}
          >
            Professional customer messaging
          </div>
        </div>

        {unreadTotal > 0 && (
          <span
            style={{
              marginLeft: "auto",
              background: palette.rose,
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              borderRadius: 999,
              padding: "4px 9px",
            }}
          >
            {unreadTotal} new
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {preview.map((conversation) => (
          <div
            key={conversation.id}
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: palette.roseSoft,
                color: palette.roseDark,
                fontSize: 12.5,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {conversation.initial}
            </div>

            <div
              style={{
                minWidth: 0,
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 600,
                }}
              >
                {conversation.name}
              </div>

              <div
                style={{
                  fontSize: 11.5,
                  color: palette.inkSoft,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginTop: 2,
                }}
              >
                {conversation.messages[conversation.messages.length - 1]?.text}
              </div>
            </div>

            {conversation.unread > 0 && (
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: palette.rose,
                }}
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="vp-primary-btn vp-focus"
        style={{
          marginTop: 18,
          width: "100%",
          background: palette.rose,
          color: "#fff",
          fontSize: 13.5,
          fontWeight: 600,
          padding: "11px 0",
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
        }}
      >
        Open messages
      </button>

      <div
        style={{
          fontSize: 11.5,
          color: palette.inkSoft,
          textAlign: "center",
          marginTop: 9,
        }}
      >
        Avg. response time: 12 minutes
      </div>
    </div>
  );
}

function MessagesPanel({
  conversations,
  setConversations,
}: {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
}) {
  const [activeId, setActiveId] = useState<number | null>(conversations[0]?.id ?? null);

  const [draft, setDraft] = useState("");

  const quickReplies = [
    "Hello! Thank you for contacting our store. How can I help you today?",
    "Yes, we can personalise this item for you.",
    "Your order will be carefully wrapped and prepared within 1–2 business days.",
    "Thank you for your order and support!",
  ];

  const active = conversations.find((conversation) => conversation.id === activeId);

  function openConversation(id: number) {
    setActiveId(id);

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              unread: 0,
            }
          : conversation,
      ),
    );
  }

  function sendMessage() {
    if (!draft.trim() || !active) return;

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === active.id
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                {
                  from: "vendor",
                  text: draft.trim(),
                  time: "Now",
                },
              ],
            }
          : conversation,
      ),
    );

    setDraft("");
  }

  return (
    <div
      className="messages-panel"
      style={{
        display: "grid",
        gridTemplateColumns: "260px minmax(0, 1fr)",
        border: `1px solid ${palette.hairline}`,
        borderRadius: 16,
        overflow: "hidden",
        minHeight: 460,
        background: "#fff",
      }}
    >
      <div
        className="messages-sidebar vp-scrollbar"
        style={{
          borderRight: `1px solid ${palette.hairline}`,
          background: palette.surfaceTint,
        }}
      >
        <div
          style={{
            padding: "16px 14px",
            fontSize: 14,
            fontWeight: 700,
            borderBottom: `1px solid ${palette.hairline}`,
          }}
        >
          Customer messages
        </div>

        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            type="button"
            onClick={() => openConversation(conversation.id)}
            className="vp-conv vp-focus"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "13px 14px",
              border: "none",
              borderBottom: `1px solid ${palette.hairline}`,
              background: conversation.id === activeId ? palette.roseSoft : "transparent",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#fff",
                color: palette.roseDark,
                fontSize: 12.5,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {conversation.initial}

              {conversation.status === "Online" && (
                <span
                  style={{
                    position: "absolute",
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: palette.success,
                    right: -1,
                    bottom: 1,
                    border: "2px solid #fff",
                  }}
                />
              )}
            </div>

            <div
              style={{
                minWidth: 0,
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {conversation.name}
              </div>

              <div
                style={{
                  fontSize: 11.5,
                  color: palette.inkSoft,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginTop: 2,
                }}
              >
                {conversation.messages[conversation.messages.length - 1]?.text}
              </div>
            </div>

            {conversation.unread > 0 && (
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: palette.rose,
                }}
              />
            )}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {active ? (
          <>
            <div
              style={{
                padding: "14px 18px",
                borderBottom: `1px solid ${palette.hairline}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  {active.name}
                </div>

                <div
                  style={{
                    fontSize: 11,
                    color: active.status === "Online" ? palette.success : palette.inkSoft,
                    marginTop: 2,
                  }}
                >
                  {active.status}
                </div>
              </div>

              <MoreHorizontal size={20} color={palette.inkSoft} />
            </div>

            <div
              className="vp-scrollbar"
              style={{
                flex: 1,
                padding: 18,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                overflowY: "auto",
                background: "#FFFCFD",
              }}
            >
              {active.messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: message.from === "vendor" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "75%",
                      background: message.from === "vendor" ? palette.rose : palette.roseSoft,
                      color: message.from === "vendor" ? "#fff" : palette.ink,
                      fontSize: 13.5,
                      padding: "10px 13px",
                      borderRadius: 14,
                      lineHeight: 1.45,
                    }}
                  >
                    {message.text}

                    <div
                      style={{
                        fontSize: 10.5,
                        opacity: 0.72,
                        marginTop: 4,
                      }}
                    >
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: "8px 12px",
                borderTop: `1px solid ${palette.hairline}`,
                display: "flex",
                gap: 8,
                overflowX: "auto",
              }}
            >
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setDraft(reply)}
                  style={{
                    whiteSpace: "nowrap",
                    border: `1px solid ${palette.hairline}`,
                    background: palette.roseSofter,
                    color: palette.roseDark,
                    borderRadius: 999,
                    padding: "6px 10px",
                    fontSize: 11,
                    cursor: "pointer",
                  }}
                >
                  Quick reply {index + 1}
                </button>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                padding: 12,
                borderTop: `1px solid ${palette.hairline}`,
              }}
            >
              <input
                className="vp-input"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Write a reply…"
                style={{
                  flex: 1,
                  border: `1px solid ${palette.hairline}`,
                  borderRadius: 10,
                  padding: "10px 12px",
                  fontSize: 13.5,
                }}
              />

              <button
                type="button"
                onClick={sendMessage}
                aria-label="Send message"
                className="vp-primary-btn vp-focus"
                style={{
                  background: palette.rose,
                  border: "none",
                  borderRadius: 10,
                  width: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Send size={17} color="#fff" />
              </button>
            </div>
          </>
        ) : (
          <div
            style={{
              padding: 24,
              fontSize: 13.5,
              color: palette.inkSoft,
            }}
          >
            No conversation selected.
          </div>
        )}
      </div>
    </div>
  );
}

function ProductForm({
  initial,
  onCancel,
  onSave,
}: {
  initial?: ProductFormData;
  onCancel: () => void;
  onSave: (data: ProductFormData) => void;
}) {
  const [form, setForm] = useState<ProductFormData>(
    initial || {
      name: "",
      price: "",
      stock: "",
      category: "",
      description: "",
      icon: "Gift",
      image: null,
    },
  );

  const [imageError, setImageError] = useState("");

  function update<K extends keyof ProductFormData>(field: K, value: ProductFormData[K]) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setImageError("Please choose an image file.");
      return;
    }

    if (file.size > 4 * 1024 * 1024) {
      setImageError("Image is too large — please use one under 4MB.");
      return;
    }

    setImageError("");

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        update("image", reader.result);
      }
    };

    reader.readAsDataURL(file);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!form.name.trim() || !form.price || !form.stock) {
      return;
    }

    onSave({
      ...form,
      price: parseFloat(String(form.price)),
      stock: parseInt(String(form.stock), 10),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: palette.surfaceTint,
        border: `1px solid ${palette.hairline}`,
        borderRadius: 14,
        padding: 18,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          {initial ? "Edit gift item" : "Add a new gift item"}
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="vp-focus"
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          <X size={18} color={palette.inkSoft} />
        </button>
      </div>

      <div
        className="vendor-form-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        <div
          style={{
            gridColumn: "1 / -1",
          }}
        >
          <label style={labelStyle}>Item name</label>

          <input
            required
            className="vp-input"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Price (USD)</label>

          <input
            required
            type="number"
            step="0.01"
            min="0"
            className="vp-input"
            value={form.price}
            onChange={(event) => update("price", event.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Stock quantity</label>

          <input
            required
            type="number"
            min="0"
            className="vp-input"
            value={form.stock}
            onChange={(event) => update("stock", event.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Category</label>

          <input
            className="vp-input"
            value={form.category}
            onChange={(event) => update("category", event.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Product icon</label>

          <select
            className="vp-input"
            value={form.icon}
            onChange={(event) => update("icon", event.target.value)}
            style={{
              ...inputStyle,
              background: "#fff",
            }}
          >
            {ICON_NAMES.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            gridColumn: "1 / -1",
          }}
        >
          <label style={labelStyle}>Product image</label>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 12,
                background: palette.roseSoft,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
                border: `1px solid ${palette.hairline}`,
              }}
            >
              {form.image ? (
                <img
                  src={form.image}
                  alt="Item preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <ImagePlus size={24} color={palette.rose} />
              )}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 7,
              }}
            >
              <label
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  width: "fit-content",
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: `1px solid ${palette.hairline}`,
                  background: "#fff",
                  fontSize: 12.5,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <ImagePlus size={14} />

                {form.image ? "Replace photo" : "Upload photo"}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{
                    display: "none",
                  }}
                />
              </label>

              {form.image && (
                <button
                  type="button"
                  onClick={() => update("image", null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    border: "none",
                    background: "none",
                    color: palette.roseDark,
                    fontSize: 12,
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <ImageOff size={13} />
                  Remove photo
                </button>
              )}

              <span
                style={{
                  fontSize: 11,
                  color: palette.inkSoft,
                }}
              >
                PNG or JPG, maximum 4MB.
              </span>

              {imageError && (
                <span
                  style={{
                    fontSize: 11,
                    color: palette.roseDark,
                  }}
                >
                  {imageError}
                </span>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            gridColumn: "1 / -1",
          }}
        >
          <label style={labelStyle}>Description</label>

          <textarea
            className="vp-input"
            rows={3}
            value={form.description}
            onChange={(event) => update("description", event.target.value)}
            style={{
              ...inputStyle,
              resize: "vertical",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "flex-end",
          marginTop: 16,
        }}
      >
        <button type="button" onClick={onCancel} style={secondaryButtonStyle}>
          Cancel
        </button>

        <button type="submit" className="vp-primary-btn vp-focus" style={primaryButtonStyle}>
          {initial ? "Save changes" : "Add item"}
        </button>
      </div>
    </form>
  );
}

function ManageProductsPanel({
  products,
  onAdd,
  onUpdate,
  onDelete,
}: {
  products: Product[];
  onAdd: (product: Product) => Promise<Product>;
  onUpdate: (product: Product) => Promise<Product>;
  onDelete: (productId: string) => Promise<void>;
}) {
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );

  const editingItem = products.find((product) => product.id === editingId) || null;

  async function addProduct(data: ProductFormData) {
    try {
      const product = {
        ...data,
        price: Number(data.price),
        stock: Number(data.stock),
        mrp: Number(data.price),
        rating: 0,
        reviews: 0,
        emoji: "🎁",
        tags: [],
        status: "active",
      } as Product;

      await onAdd(product);
      setShowForm(false);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to add product");
    }
  }

  async function updateProduct(data: ProductUpdateData) {
    const existing = products.find((product) => product.id === editingId);

    if (!existing) return;

    try {
      await onUpdate({
        ...existing,
        ...data,
        price: Number(data.price),
        stock: Number(data.stock),
        mrp: Number(data.mrp || data.price),
      } as Product);

      setEditingId(null);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to update product");
    }
  }

  async function deleteProduct(id: string) {
    try {
      await onDelete(id);
      setConfirmDeleteId(null);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to remove product");
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginBottom: 16,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            position: "relative",
            flex: 1,
            minWidth: 200,
          }}
        >
          <Search
            size={15}
            color={palette.inkSoft}
            style={{
              position: "absolute",
              left: 11,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />

          <input
            className="vp-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search your gift items…"
            style={{
              width: "100%",
              border: `1px solid ${palette.hairline}`,
              borderRadius: 9,
              padding: "10px 12px 10px 34px",
              fontSize: 13.5,
            }}
          />
        </div>

        <button
          type="button"
          onClick={() => {
            setShowForm(true);
            setEditingId(null);
          }}
          className="vp-primary-btn vp-focus"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            ...primaryButtonStyle,
          }}
        >
          <Plus size={16} />
          Add gift item
        </button>
      </div>

      {showForm && <ProductForm onCancel={() => setShowForm(false)} onSave={addProduct} />}

      {editingItem && (
        <ProductForm
          initial={{
            name: editingItem.name,
            price: String(editingItem.price),
            stock: String(editingItem.stock),
            category: editingItem.category ?? "",
            description: editingItem.description ?? "",
            icon: editingItem.icon ?? "Gift",
            image: editingItem.image ?? null,
          }}
          onCancel={() => setEditingId(null)}
          onSave={updateProduct}
        />
      )}

      <div
        style={{
          border: `1px solid ${palette.hairline}`,
          borderRadius: 12,
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <div
          className="vendor-table-header"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) 90px 80px 110px 100px",
            padding: "11px 14px",
            background: palette.surfaceTint,
            fontSize: 11,
            fontWeight: 700,
            color: palette.inkSoft,
            textTransform: "uppercase",
          }}
        >
          <span>Item</span>
          <span>Price</span>
          <span>Stock</span>
          <span className="vendor-table-category">Category</span>

          <span
            className="vendor-table-actions-label"
            style={{
              textAlign: "right",
            }}
          >
            Actions
          </span>
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              padding: 30,
              fontSize: 13.5,
              color: palette.inkSoft,
              textAlign: "center",
            }}
          >
            No gift items match your search.
          </div>
        )}

        {filtered.map((product) => {
          const Icon = Gift;

          return (
            <div
              key={product.id}
              className="vendor-product-row vp-row"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr) 90px 80px 110px 100px",
                alignItems: "center",
                padding: "11px 14px",
                borderTop: `1px solid ${palette.hairline}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9,
                    background: palette.roseSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Icon size={17} color={palette.rose} />
                  )}
                </div>

                <span
                  style={{
                    fontSize: 13.5,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {product.name}
                </span>
              </div>

              <span
                style={{
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: palette.roseDark,
                }}
              >
                ${product.price.toFixed(2)}
              </span>

              <span
                style={{
                  fontSize: 13.5,
                  color: product.stock < 10 ? palette.rose : palette.ink,
                }}
              >
                {product.stock}
              </span>

              <span
                className="vendor-table-category"
                style={{
                  fontSize: 13,
                  color: palette.inkSoft,
                }}
              >
                {product.category || "—"}
              </span>

              <div
                className="vendor-product-actions"
                style={{
                  display: "flex",
                  gap: 6,
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(product.id);
                    setShowForm(false);
                  }}
                  style={iconButtonStyle}
                >
                  <Pencil size={14} color={palette.inkSoft} />
                </button>

                <button
                  type="button"
                  onClick={() => setConfirmDeleteId(product.id)}
                  style={iconButtonStyle}
                >
                  <Trash2 size={14} color={palette.roseDark} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {confirmDeleteId !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(43,26,34,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 22,
              maxWidth: 340,
              width: "100%",
              boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Remove this gift item?
            </div>

            <div
              style={{
                fontSize: 13.5,
                color: palette.inkSoft,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              This action cannot be undone. The product will no longer be visible to buyers.
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                onClick={() => setConfirmDeleteId(null)}
                style={secondaryButtonStyle}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => deleteProduct(confirmDeleteId)}
                style={{
                  ...primaryButtonStyle,
                  background: palette.roseDark,
                }}
              >
                Remove item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Vendor() {
  const { products: catalogProducts, addProduct, updateProduct, deleteProduct } = useProducts();

  const vendorId = (() => {
    try {
      const storedUser = localStorage.getItem("gifty_user");
      const parsedUser: {
        uid?: string;
        id?: string;
        vendor?: Partial<VendorProfile>;
      } | null = storedUser ? JSON.parse(storedUser) : null;

      return parsedUser?.uid || parsedUser?.id || null;
    } catch {
      return null;
    }
  })();

  const [tab, setTab] = useState("overview");
  const [following, setFollowing] = useState(false);

  const products = useMemo(
    () => catalogProducts.filter((product) => !vendorId || product.vendorId === vendorId),
    [catalogProducts, vendorId],
  );

  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);

  const [vendor, setVendor] = useState<VendorProfile>(() => {
    const fallback: VendorProfile = {
      name: "Wrapped & Co. Gifts",
      location: "Colombo, Sri Lanka",
      hours: "Mon–Sat, 9:00 AM – 8:00 PM",
      phone: "+94 77 123 4567",
      email: "hello@wrappedandco.com",
      website: "wrappedandco.com",
    };

    try {
      const storedUser = localStorage.getItem("gifty_user");

      const parsedUser: {
        vendor?: Partial<VendorProfile>;
      } | null = storedUser ? JSON.parse(storedUser) : null;

      const storedVendor = parsedUser?.vendor;

      return storedVendor ? { ...fallback, ...storedVendor } : fallback;
    } catch {
      return fallback;
    }
  });

  const [editingProfile, setEditingProfile] = useState(false);
  const [productSearch, setProductSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          products
            .map((product) => product.category)
            .filter((category): category is string => Boolean(category)),
        ),
      ),
    ],
    [products],
  );

  const storefrontProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(productSearch.toLowerCase());

      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, productSearch, selectedCategory]);

  const tabs = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "products",
      label: "Storefront",
    },
    {
      id: "manage",
      label: "Manage items",
    },
    {
      id: "messages",
      label: "Messages",
    },
    {
      id: "policies",
      label: "Shipping & returns",
    },
  ];

  function handleShare() {
    if (navigator.share && typeof window !== "undefined") {
      navigator.share({
        title: vendor.name,
        text: `Visit ${vendor.name}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert("Store link copied to clipboard.");
    }
  }

  function saveVendorProfile() {
    try {
      const storedUser = localStorage.getItem("gifty_user");

      if (storedUser) {
        const parsedUser: Record<string, unknown> = JSON.parse(storedUser);

        localStorage.setItem(
          "gifty_user",
          JSON.stringify({
            ...parsedUser,
            vendor,
          }),
        );
      }
    } catch {
      // Keep the UI state even if localStorage is unavailable.
    }

    setEditingProfile(false);
  }

  return (
    <div
      className="vendor-page"
      style={{
        background: palette.bg,
        minHeight: "100vh",
        padding: "24px 16px 50px",
      }}
    >
      <style>{fontImport}</style>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          className="vp-hero-anim"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12.5,
            color: palette.inkSoft,
            marginBottom: 14,
          }}
        >
          <span>Marketplace</span>

          <ChevronRight size={13} />

          <span>Gifts & Novelty</span>

          <ChevronRight size={13} />

          <span
            style={{
              color: palette.ink,
            }}
          >
            {vendor.name}
          </span>
        </div>

        <StoreBanner />

        <div
          className="vp-hero-anim"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: -38,
            padding: "0 6px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 82,
                height: 82,
                borderRadius: 18,
                background: "#fff",
                border: `4px solid ${palette.bg}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 20px rgba(194,24,91,0.16)",
              }}
            >
              <Gift size={34} color={palette.rose} strokeWidth={1.6} />
            </div>

            <div
              style={{
                paddingBottom: 4,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <h1
                  className="vendor-display"
                  style={{
                    fontSize: 26,
                    fontWeight: 650,
                    margin: 0,
                  }}
                >
                  {vendor.name}
                </h1>

                <BadgeCheck size={20} color={palette.rose} fill={palette.roseSoft} />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 6,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 13.5,
                  }}
                >
                  <Star size={14} fill={palette.rose} color={palette.rose} />

                  <strong>4.8</strong>

                  <span
                    style={{
                      color: palette.inkSoft,
                    }}
                  >
                    (1,204 ratings)
                  </span>
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 11.5,
                    color: palette.success,
                    background: palette.successSoft,
                    padding: "4px 9px",
                    borderRadius: 999,
                    fontWeight: 700,
                  }}
                >
                  <CheckCircle2 size={13} />
                  Business account
                </span>
              </div>
            </div>
          </div>

          <div
            className="vendor-hero-actions"
            style={{
              display: "flex",
              gap: 10,
              paddingBottom: 4,
            }}
          >
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share store"
              style={iconButtonStyle}
            >
              <Share2 size={17} color={palette.inkSoft} />
            </button>

            <button
              type="button"
              onClick={() => setFollowing((previous) => !previous)}
              aria-label="Follow store"
              style={{
                ...iconButtonStyle,
                background: following ? palette.roseSoft : "#fff",
              }}
            >
              <Heart
                size={17}
                color={following ? palette.roseDark : palette.inkSoft}
                fill={following ? palette.roseDark : "none"}
              />
            </button>

            <button
              type="button"
              onClick={() => setTab("products")}
              className="vp-primary-btn vp-focus"
              style={primaryButtonStyle}
            >
              Visit store
            </button>
          </div>
        </div>

        <div
          className="vp-hero-anim"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            background: "#fff",
            border: `1px solid ${palette.hairline}`,
            borderRadius: 14,
            padding: "15px 20px",
            marginTop: 20,
          }}
        >
          <StatChip icon={Package} label="products" value={String(products.length)} />

          <StatChip icon={Users} label="followers" value="12.4K" />

          <StatChip icon={ShoppingBag} label="orders shipped" value="28.6K" />

          <StatChip icon={Clock} label="response rate" value="98%" />

          <StatChip icon={Truck} label="on-time delivery" value="96%" />
        </div>

        <div
          style={{
            display: "flex",
            gap: 26,
            borderBottom: `1px solid ${palette.hairline}`,
            marginTop: 28,
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              data-active={tab === item.id}
              className="vp-tab-btn vp-focus"
              style={{
                background: "none",
                border: "none",
                padding: "0 0 13px",
                fontSize: 14,
                fontWeight: 700,
                color: tab === item.id ? palette.ink : palette.inkSoft,
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div
            className="vendor-overview-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) 310px",
              gap: 26,
            }}
          >
            <div>
              <div
                style={{
                  background: "#fff",
                  border: `1px solid ${palette.hairline}`,
                  borderRadius: 14,
                  padding: 22,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <Store size={18} color={palette.rose} />

                  <h2
                    className="vendor-display"
                    style={{
                      fontSize: 20,
                      margin: 0,
                    }}
                  >
                    About our business
                  </h2>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: palette.inkSoft,
                    marginBottom: 0,
                  }}
                >
                  We make small, thoughtful things for the moments people want to mark. From candles
                  poured in Colombo to personalised keepsake boxes, every parcel leaves our workshop
                  carefully wrapped by hand.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <div>
                  <h2
                    className="vendor-display"
                    style={{
                      fontSize: 20,
                      margin: 0,
                    }}
                  >
                    Featured gifts
                  </h2>

                  <div
                    style={{
                      fontSize: 12.5,
                      color: palette.inkSoft,
                      marginTop: 4,
                    }}
                  >
                    Popular products from this store
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setTab("products")}
                  style={{
                    border: "none",
                    background: "none",
                    color: palette.roseDark,
                    fontSize: 12.5,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  View all
                </button>
              </div>

              <div
                className="vendor-products-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                  gap: 14,
                }}
              >
                {products.slice(0, 6).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <MessagesSummaryCard
                conversations={conversations}
                onOpen={() => setTab("messages")}
              />

              <BusinessInfoCard vendor={vendor} onEdit={() => setEditingProfile(true)} />
            </div>
          </div>
        )}

        {tab === "products" && (
          <div>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  minWidth: 220,
                }}
              >
                <Search
                  size={17}
                  color={palette.inkSoft}
                  style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />

                <input
                  className="vp-input"
                  value={productSearch}
                  onChange={(event) => setProductSearch(event.target.value)}
                  placeholder="Search products in this store..."
                  style={{
                    width: "100%",
                    border: `1px solid ${palette.hairline}`,
                    borderRadius: 10,
                    padding: "11px 12px 11px 38px",
                    fontSize: 13.5,
                    background: "#fff",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Filter size={16} color={palette.inkSoft} />

                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      border:
                        selectedCategory === category
                          ? `1px solid ${palette.rose}`
                          : `1px solid ${palette.hairline}`,
                      background: selectedCategory === category ? palette.roseSoft : "#fff",
                      color: selectedCategory === category ? palette.roseDark : palette.inkSoft,
                      padding: "8px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {storefrontProducts.length === 0 ? (
              <div
                style={{
                  padding: 40,
                  textAlign: "center",
                  background: "#fff",
                  borderRadius: 14,
                  border: `1px solid ${palette.hairline}`,
                  color: palette.inkSoft,
                }}
              >
                No products found.
              </div>
            ) : (
              <div
                className="vendor-products-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                  gap: 16,
                }}
              >
                {storefrontProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => alert(`${product.name} added to cart`)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "manage" && (
          <ManageProductsPanel
            products={products}
            onAdd={addProduct}
            onUpdate={updateProduct}
            onDelete={deleteProduct}
          />
        )}

        {tab === "messages" && (
          <MessagesPanel conversations={conversations} setConversations={setConversations} />
        )}

        {tab === "policies" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                icon: Package,
                title: "Dispatch time",
                body: "Orders are carefully wrapped and handed to our courier within 1–2 business days.",
              },
              {
                icon: Truck,
                title: "Shipping",
                body: "Tracked local delivery takes approximately 3–5 days. International shipping times depend on the destination.",
              },
              {
                icon: ShieldCheck,
                title: "Returns",
                body: "Unused eligible items can be returned within 14 days. Personalised products are made to order and are final sale.",
              },
              {
                icon: MessageCircle,
                title: "Customer support",
                body: "Contact our store directly through the in-app messaging system for fast assistance.",
              },
            ].map((policy) => {
              const Icon = policy.icon;

              return (
                <div
                  key={policy.title}
                  className="vp-card-hover"
                  style={{
                    background: "#fff",
                    border: `1px solid ${palette.hairline}`,
                    borderRadius: 14,
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 11,
                      background: palette.roseSoft,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <Icon size={20} color={palette.roseDark} />
                  </div>

                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {policy.title}
                  </div>

                  <div
                    style={{
                      fontSize: 13,
                      lineHeight: 1.65,
                      color: palette.inkSoft,
                    }}
                  >
                    {policy.body}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {editingProfile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(43,26,34,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              width: "100%",
              maxWidth: 500,
              padding: 22,
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  Edit business profile
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: palette.inkSoft,
                    marginTop: 3,
                  }}
                >
                  Manage your public vendor information
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEditingProfile(false)}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </div>

            {(
              [
                ["name", "Business name"],
                ["location", "Location"],
                ["hours", "Business hours"],
                ["phone", "Phone number"],
                ["email", "Email address"],
                ["website", "Website"],
              ] as Array<[keyof VendorProfile, string]>
            ).map(([field, label]) => (
              <div
                key={field}
                style={{
                  marginBottom: 13,
                }}
              >
                <label style={labelStyle}>{label}</label>

                <input
                  className="vp-input"
                  value={vendor[field]}
                  onChange={(event) =>
                    setVendor((previous) => ({
                      ...previous,
                      [field]: event.target.value,
                    }))
                  }
                  style={inputStyle}
                />
              </div>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 10,
                marginTop: 20,
              }}
            >
              <button
                type="button"
                onClick={() => setEditingProfile(false)}
                style={secondaryButtonStyle}
              >
                Cancel
              </button>

              <button type="button" onClick={saveVendorProfile} style={primaryButtonStyle}>
                Save profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  color: palette.inkSoft,
  display: "block",
  marginBottom: 5,
  fontWeight: 500,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: `1px solid ${palette.hairline}`,
  borderRadius: 9,
  padding: "9px 11px",
  fontSize: 13.5,
  background: "#fff",
};

const primaryButtonStyle: React.CSSProperties = {
  padding: "10px 18px",
  borderRadius: 9,
  border: "none",
  background: palette.rose,
  color: "#fff",
  fontSize: 13.5,
  fontWeight: 700,
  cursor: "pointer",
};

const secondaryButtonStyle: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: 9,
  border: `1px solid ${palette.hairline}`,
  background: "#fff",
  color: palette.ink,
  fontSize: 13.5,
  cursor: "pointer",
};

const iconButtonStyle: React.CSSProperties = {
  width: 38,
  height: 38,
  borderRadius: 9,
  border: `1px solid ${palette.hairline}`,
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

export const Route = createFileRoute("/vendor")({
  component: Vendor,
});
